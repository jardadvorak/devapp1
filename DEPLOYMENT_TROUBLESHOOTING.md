# AWS Amplify GraphQL API Deployment Troubleshooting Guide

This document outlines the common GraphQL API issues that can occur during AWS deployment and the fixes that have been implemented.

## 🔧 Issues Fixed

### 1. Authorization Mode Mismatch
**Problem**: The data resource was configured with `defaultAuthorizationMode: "apiKey"` while the frontend code used `authMode: "userPool"`.

**Fix Applied**:
- Changed `amplify/data/resource.ts` to use `defaultAuthorizationMode: "userPool"`
- This ensures consistency between backend and frontend authorization modes

**Files Modified**:
- `amplify/data/resource.ts`

### 2. Missing Error Handling in Post-Confirmation Trigger
**Problem**: The post-confirmation Lambda handler lacked proper error handling, causing silent failures during user registration.

**Fix Applied**:
- Added comprehensive try-catch error handling
- Added detailed logging for debugging deployment issues
- Added proper error propagation to prevent incomplete user registration

**Files Modified**:
- `amplify/auth/post-confirmation/handler.ts`

### 3. Poor Error Handling in Frontend
**Problem**: The Dashboard component had basic error handling that didn't provide enough information for debugging GraphQL issues.

**Fix Applied**:
- Enhanced error handling with detailed logging
- Added user-friendly error display with retry functionality
- Added GraphQL-specific error parsing

**Files Modified**:
- `src/pages/Dashboard.jsx`

## 🛠️ Validation Tools

### Deployment Validation Script
A validation script has been created to help identify potential deployment issues before they occur.

**Usage**:
```bash
npm run validate-deployment
```

**What it checks**:
- Amplify configuration files presence
- Authorization mode consistency
- Error handling implementation
- Required dependencies
- Post-confirmation trigger configuration

## 🚨 Common Deployment Issues & Solutions

### Issue 1: GraphQL Authorization Errors
**Symptoms**:
- `UnauthorizedError` in CloudWatch logs
- Users can't access their data after login
- GraphQL mutations fail silently

**Solutions**:
1. Ensure authorization modes match between backend and frontend
2. Check that UserProfile model has correct owner-based authorization
3. Verify user pool configuration is correct

### Issue 2: Post-Confirmation Trigger Failures
**Symptoms**:
- Users can register but profiles aren't created
- Authentication works but Dashboard shows no data
- Lambda function errors in CloudWatch

**Solutions**:
1. Check CloudWatch logs for the post-confirmation Lambda
2. Verify IAM permissions for the Lambda function
3. Ensure GraphQL endpoint is accessible from Lambda
4. Check environment variables are properly set

### Issue 3: Frontend GraphQL Client Issues
**Symptoms**:
- Network errors when fetching data
- Authentication tokens not being sent
- CORS errors in browser console

**Solutions**:
1. Verify `amplify_outputs.json` is up to date
2. Check that Amplify is configured correctly in `src/App.jsx`
3. Ensure the correct auth mode is used in GraphQL clients

## 🔍 Debugging Steps

### 1. Check CloudWatch Logs
```bash
# View post-confirmation Lambda logs
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/amplify"

# View AppSync GraphQL logs
aws logs describe-log-groups --log-group-name-prefix "/aws/appsync"
```

### 2. Test GraphQL API Directly
Use the AWS AppSync console to test GraphQL queries and mutations directly.

### 3. Verify Authentication Flow
1. Test user registration
2. Check if post-confirmation trigger executes
3. Verify user profile creation
4. Test user login and data access

### 4. Check IAM Permissions
Ensure the post-confirmation Lambda has permissions to:
- Access the GraphQL API
- Create UserProfile records
- Write to CloudWatch logs

## 📋 Pre-Deployment Checklist

- [ ] Run `npm run validate-deployment`
- [ ] Test authentication flow locally
- [ ] Verify all required environment variables are set
- [ ] Check that authorization modes are consistent
- [ ] Test GraphQL operations in development
- [ ] Review CloudWatch logs for any existing errors
- [ ] Ensure all dependencies are up to date

## 🔧 Configuration Files Overview

### Backend Configuration
- `amplify/backend.ts` - Main backend configuration
- `amplify/data/resource.ts` - GraphQL schema and authorization
- `amplify/auth/resource.ts` - Authentication configuration
- `amplify/auth/post-confirmation/handler.ts` - User profile creation logic

### Frontend Configuration
- `src/App.jsx` - Amplify configuration and routing
- `src/pages/Dashboard.jsx` - GraphQL data fetching
- `amplify_outputs.json` - Generated configuration (auto-updated)

## 🆘 Getting Help

If you continue to experience issues:

1. Run the validation script: `npm run validate-deployment`
2. Check CloudWatch logs for specific error messages
3. Verify your AWS credentials and permissions
4. Test the authentication flow step by step
5. Compare your configuration with the AWS Amplify documentation

## 📚 Additional Resources

- [AWS Amplify Gen 2 Documentation](https://docs.amplify.aws/react/)
- [GraphQL Authorization](https://docs.amplify.aws/react/build-a-backend/data/customize-authz/)
- [Lambda Triggers](https://docs.amplify.aws/react/build-a-backend/auth/concepts/lambda-triggers/)
- [Troubleshooting Guide](https://docs.amplify.aws/react/build-a-backend/troubleshooting/)
