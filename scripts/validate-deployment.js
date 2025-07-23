#!/usr/bin/env node

/**
 * Deployment validation script for AWS Amplify GraphQL API
 * This script helps identify common issues that can cause deployment failures
 */

import fs from 'fs';
import path from 'path';

const COLORS = {
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  RESET: '\x1b[0m'
};

function log(color, message) {
  console.log(`${color}${message}${COLORS.RESET}`);
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    log(COLORS.GREEN, `✓ ${description}: ${filePath}`);
    return true;
  } else {
    log(COLORS.RED, `✗ ${description}: ${filePath} (missing)`);
    return false;
  }
}

function validateAmplifyConfig() {
  log(COLORS.BLUE, '\n=== Validating Amplify Configuration ===');
  
  let issues = 0;
  
  // Check required files
  if (!checkFile('amplify/backend.ts', 'Backend configuration')) issues++;
  if (!checkFile('amplify/data/resource.ts', 'Data resource configuration')) issues++;
  if (!checkFile('amplify/auth/resource.ts', 'Auth resource configuration')) issues++;
  if (!checkFile('amplify_outputs.json', 'Amplify outputs')) issues++;
  
  // Check data resource configuration
  if (fs.existsSync('amplify/data/resource.ts')) {
    const dataResource = fs.readFileSync('amplify/data/resource.ts', 'utf8');
    
    if (dataResource.includes('defaultAuthorizationMode: "userPool"')) {
      log(COLORS.GREEN, '✓ Data resource uses userPool authorization (matches frontend)');
    } else if (dataResource.includes('defaultAuthorizationMode: "apiKey"')) {
      log(COLORS.YELLOW, '⚠ Data resource uses apiKey authorization - ensure frontend matches');
    } else {
      log(COLORS.RED, '✗ Data resource authorization mode not clearly defined');
      issues++;
    }
    
    if (dataResource.includes('allow.ownerDefinedIn("profileOwner")')) {
      log(COLORS.GREEN, '✓ UserProfile model has owner-based authorization');
    } else {
      log(COLORS.YELLOW, '⚠ UserProfile model authorization may need review');
    }
  }
  
  return issues;
}

function validateFrontendConfig() {
  log(COLORS.BLUE, '\n=== Validating Frontend Configuration ===');
  
  let issues = 0;
  
  // Check App.jsx
  if (fs.existsSync('src/App.jsx')) {
    const appContent = fs.readFileSync('src/App.jsx', 'utf8');
    
    if (appContent.includes('Amplify.configure(outputs)')) {
      log(COLORS.GREEN, '✓ App.jsx configures Amplify with outputs');
    } else {
      log(COLORS.RED, '✗ App.jsx missing Amplify configuration');
      issues++;
    }
    
    if (appContent.includes('authMode: "userPool"')) {
      log(COLORS.GREEN, '✓ App.jsx uses userPool auth mode');
    } else if (appContent.includes('authMode: "apiKey"')) {
      log(COLORS.YELLOW, '⚠ App.jsx uses apiKey auth mode - ensure backend matches');
    }
  }
  
  // Check Dashboard.jsx
  if (fs.existsSync('src/pages/Dashboard.jsx')) {
    const dashboardContent = fs.readFileSync('src/pages/Dashboard.jsx', 'utf8');
    
    if (dashboardContent.includes('try {') && dashboardContent.includes('catch (error)')) {
      log(COLORS.GREEN, '✓ Dashboard.jsx has error handling for GraphQL operations');
    } else {
      log(COLORS.YELLOW, '⚠ Dashboard.jsx may need better error handling');
    }
  }
  
  return issues;
}

function validatePostConfirmation() {
  log(COLORS.BLUE, '\n=== Validating Post-Confirmation Trigger ===');
  
  let issues = 0;
  
  if (fs.existsSync('amplify/auth/post-confirmation/handler.ts')) {
    const handlerContent = fs.readFileSync('amplify/auth/post-confirmation/handler.ts', 'utf8');
    
    if (handlerContent.includes('try {') && handlerContent.includes('catch (error)')) {
      log(COLORS.GREEN, '✓ Post-confirmation handler has error handling');
    } else {
      log(COLORS.RED, '✗ Post-confirmation handler missing error handling');
      issues++;
    }
    
    if (handlerContent.includes('console.log') || handlerContent.includes('console.error')) {
      log(COLORS.GREEN, '✓ Post-confirmation handler has logging for debugging');
    } else {
      log(COLORS.YELLOW, '⚠ Post-confirmation handler could benefit from more logging');
    }
    
    if (handlerContent.includes('authMode: "iam"')) {
      log(COLORS.GREEN, '✓ Post-confirmation handler uses IAM auth mode');
    } else {
      log(COLORS.RED, '✗ Post-confirmation handler auth mode may be incorrect');
      issues++;
    }
  } else {
    log(COLORS.RED, '✗ Post-confirmation handler not found');
    issues++;
  }
  
  return issues;
}

function validateEnvironment() {
  log(COLORS.BLUE, '\n=== Environment Validation ===');
  
  let issues = 0;
  
  // Check package.json
  if (fs.existsSync('package.json')) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    const requiredDeps = [
      'aws-amplify',
      '@aws-amplify/ui-react',
      'react',
      'react-dom',
      'react-router-dom'
    ];
    
    const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
    
    if (missingDeps.length === 0) {
      log(COLORS.GREEN, '✓ All required dependencies are present');
    } else {
      log(COLORS.RED, `✗ Missing dependencies: ${missingDeps.join(', ')}`);
      issues++;
    }
    
    if (packageJson.devDependencies['@aws-amplify/backend']) {
      log(COLORS.GREEN, '✓ Amplify backend dev dependency present');
    } else {
      log(COLORS.RED, '✗ Missing @aws-amplify/backend dev dependency');
      issues++;
    }
  }
  
  return issues;
}

function main() {
  log(COLORS.BLUE, '🔍 AWS Amplify GraphQL Deployment Validation');
  log(COLORS.BLUE, '============================================');
  
  let totalIssues = 0;
  
  totalIssues += validateAmplifyConfig();
  totalIssues += validateFrontendConfig();
  totalIssues += validatePostConfirmation();
  totalIssues += validateEnvironment();
  
  log(COLORS.BLUE, '\n=== Summary ===');
  
  if (totalIssues === 0) {
    log(COLORS.GREEN, '🎉 No critical issues found! Your configuration looks good for deployment.');
  } else if (totalIssues <= 3) {
    log(COLORS.YELLOW, `⚠ Found ${totalIssues} potential issue(s). Review the warnings above.`);
  } else {
    log(COLORS.RED, `❌ Found ${totalIssues} issue(s) that should be addressed before deployment.`);
  }
  
  log(COLORS.BLUE, '\n💡 Common deployment tips:');
  log(COLORS.RESET, '- Ensure authorization modes match between backend and frontend');
  log(COLORS.RESET, '- Check CloudWatch logs for Lambda function errors');
  log(COLORS.RESET, '- Verify IAM permissions for post-confirmation trigger');
  log(COLORS.RESET, '- Test authentication flow in development before deploying');
  
  process.exit(totalIssues > 5 ? 1 : 0);
}

main();
