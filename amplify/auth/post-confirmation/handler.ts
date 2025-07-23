import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";
import { createUserProfile } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  try {
    console.log('Creating user profile for:', event.request.userAttributes.email);
    
    const result = await client.graphql({
      query: createUserProfile,
      variables: {
        input: {
          email: event.request.userAttributes.email,
          profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
        },
      },
    });

    console.log('User profile created successfully:', result.data?.createUserProfile?.id);
    return event;
  } catch (error) {
    console.error('Error creating user profile:', error);
    
    // Log detailed error information for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const graphQLErrors = (error as any)?.errors || [];
    const networkError = (error as any)?.networkError || null;
    
    console.error('Error details:', {
      message: errorMessage,
      graphQLErrors,
      networkError,
      userEmail: event.request.userAttributes.email,
      profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
    });
    
    // Re-throw the error to prevent user registration from completing
    // if profile creation fails
    throw new Error(`Failed to create user profile: ${errorMessage}`);
  }
};
