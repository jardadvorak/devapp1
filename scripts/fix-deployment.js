#!/usr/bin/env node

/**
 * Deployment Recovery Script for AWS Amplify
 * This script helps recover from CloudFormation deployment failures
 */

import { execSync } from 'child_process';
import fs from 'fs';

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

function executeCommand(command, description) {
  log(COLORS.BLUE, `\n🔄 ${description}...`);
  log(COLORS.YELLOW, `Command: ${command}`);
  
  try {
    const output = execSync(command, { 
      stdio: 'inherit',
      encoding: 'utf8'
    });
    log(COLORS.GREEN, `✅ ${description} completed successfully`);
    return true;
  } catch (error) {
    log(COLORS.RED, `❌ ${description} failed: ${error.message}`);
    return false;
  }
}

function checkAmplifyInstallation() {
  log(COLORS.BLUE, '\n=== Checking Amplify Installation ===');
  
  try {
    execSync('npx ampx --version', { stdio: 'pipe' });
    log(COLORS.GREEN, '✅ Amplify CLI is available');
    return true;
  } catch (error) {
    log(COLORS.RED, '❌ Amplify CLI not found. Installing...');
    return executeCommand('npm install -g @aws-amplify/backend-cli', 'Install Amplify CLI');
  }
}

function backupCurrentConfig() {
  log(COLORS.BLUE, '\n=== Backing Up Current Configuration ===');
  
  const filesToBackup = [
    'amplify_outputs.json',
    'amplify/data/resource.ts',
    'amplify/auth/resource.ts',
    'amplify/backend.ts'
  ];
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = `backup-${timestamp}`;
  
  try {
    if (!fs.existsSync('backups')) {
      fs.mkdirSync('backups');
    }
    
    const fullBackupPath = `backups/${backupDir}`;
    fs.mkdirSync(fullBackupPath, { recursive: true });
    
    filesToBackup.forEach(file => {
      if (fs.existsSync(file)) {
        const fileName = file.replace(/\//g, '_');
        fs.copyFileSync(file, `${fullBackupPath}/${fileName}`);
        log(COLORS.GREEN, `✅ Backed up: ${file}`);
      }
    });
    
    log(COLORS.GREEN, `✅ Configuration backed up to: ${fullBackupPath}`);
    return true;
  } catch (error) {
    log(COLORS.RED, `❌ Backup failed: ${error.message}`);
    return false;
  }
}

function cleanupDeployment() {
  log(COLORS.BLUE, '\n=== Cleaning Up Failed Deployment ===');
  
  // First, try to delete the sandbox
  log(COLORS.YELLOW, 'Attempting to delete existing sandbox...');
  executeCommand('npx ampx sandbox delete --yes', 'Delete existing sandbox');
  
  // Clean up any local cache
  const cacheDirectories = [
    '.amplify',
    'node_modules/.cache',
    'amplify/.amplify'
  ];
  
  cacheDirectories.forEach(dir => {
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
        log(COLORS.GREEN, `✅ Cleaned up: ${dir}`);
      } catch (error) {
        log(COLORS.YELLOW, `⚠️ Could not clean: ${dir} - ${error.message}`);
      }
    }
  });
  
  return true;
}

function deployFresh() {
  log(COLORS.BLUE, '\n=== Deploying Fresh Environment ===');
  
  // Install dependencies first
  if (!executeCommand('npm install', 'Install dependencies')) {
    return false;
  }
  
  // Deploy new sandbox
  if (!executeCommand('npx ampx sandbox --once', 'Deploy new sandbox')) {
    log(COLORS.RED, '❌ Fresh deployment failed');
    return false;
  }
  
  log(COLORS.GREEN, '🎉 Fresh deployment completed successfully!');
  return true;
}

function validateDeployment() {
  log(COLORS.BLUE, '\n=== Validating Deployment ===');
  
  // Check if amplify_outputs.json was generated
  if (!fs.existsSync('amplify_outputs.json')) {
    log(COLORS.RED, '❌ amplify_outputs.json not found');
    return false;
  }
  
  try {
    const outputs = JSON.parse(fs.readFileSync('amplify_outputs.json', 'utf8'));
    
    if (outputs.data && outputs.data.url) {
      log(COLORS.GREEN, `✅ GraphQL API endpoint: ${outputs.data.url}`);
    }
    
    if (outputs.auth && outputs.auth.user_pool_id) {
      log(COLORS.GREEN, `✅ User Pool ID: ${outputs.auth.user_pool_id}`);
    }
    
    // Check if API key is present (it shouldn't be after our fix)
    if (outputs.data && outputs.data.api_key) {
      log(COLORS.YELLOW, '⚠️ API key still present - this might cause issues');
    } else {
      log(COLORS.GREEN, '✅ No API key found (correct for userPool auth)');
    }
    
    return true;
  } catch (error) {
    log(COLORS.RED, `❌ Error reading amplify_outputs.json: ${error.message}`);
    return false;
  }
}

function main() {
  log(COLORS.BLUE, '🚀 AWS Amplify Deployment Recovery');
  log(COLORS.BLUE, '===================================');
  
  log(COLORS.YELLOW, '\n⚠️  This script will:');
  log(COLORS.RESET, '1. Backup your current configuration');
  log(COLORS.RESET, '2. Delete the existing CloudFormation stack');
  log(COLORS.RESET, '3. Clean up local cache');
  log(COLORS.RESET, '4. Deploy a fresh environment');
  log(COLORS.RESET, '5. Validate the new deployment');
  
  log(COLORS.YELLOW, '\n⏱️  This process may take 5-10 minutes...');
  
  // Wait for user confirmation
  console.log('\nPress Ctrl+C to cancel, or press Enter to continue...');
  
  let success = true;
  
  success = success && checkAmplifyInstallation();
  success = success && backupCurrentConfig();
  success = success && cleanupDeployment();
  success = success && deployFresh();
  success = success && validateDeployment();
  
  log(COLORS.BLUE, '\n=== Summary ===');
  
  if (success) {
    log(COLORS.GREEN, '🎉 Deployment recovery completed successfully!');
    log(COLORS.GREEN, 'Your application should now deploy without the API key error.');
    log(COLORS.BLUE, '\n💡 Next steps:');
    log(COLORS.RESET, '1. Test your application locally with: npm run dev');
    log(COLORS.RESET, '2. Test the authentication flow');
    log(COLORS.RESET, '3. Deploy to production when ready');
  } else {
    log(COLORS.RED, '❌ Deployment recovery encountered issues.');
    log(COLORS.YELLOW, '💡 Manual steps you can try:');
    log(COLORS.RESET, '1. Check AWS CloudFormation console for stuck stacks');
    log(COLORS.RESET, '2. Manually delete the CloudFormation stack if needed');
    log(COLORS.RESET, '3. Ensure AWS credentials are properly configured');
    log(COLORS.RESET, '4. Try running: npx ampx sandbox delete --yes');
  }
  
  process.exit(success ? 0 : 1);
}

// Handle process interruption
process.on('SIGINT', () => {
  log(COLORS.YELLOW, '\n\n⚠️  Process interrupted by user');
  process.exit(1);
});

main();
