import { gql } from 'graphql-request';
import { shopifyClient, shopifyAdminClient } from './Shopify';

// GraphQL mutations and queries for authentication
const CUSTOMER_CREATE_MUTATION = gql`
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        id
        firstName
        lastName
        email
        phone
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CUSTOMER_ACCESS_TOKEN_CREATE_MUTATION = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_RECOVER_MUTATION = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CUSTOMER_RESET_MUTATION = gql`
  mutation customerReset($input: CustomerResetInput!) {
    customerReset(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

// Types
export interface ShopifyAuthResponse {
    success: boolean;
    customerAccessToken?: {
        accessToken: string;
        expiresAt: string;
    };
    customer?: {
        id: string;
        firstName?: string;
        lastName?: string;
        email: string;
        phone?: string;
    };
    error?: string;
}

export interface GoogleAuthResponse {
    success: boolean;
    customerAccessToken?: {
        accessToken: string;
        expiresAt: string;
    };
    customer?: {
        id: string;
        firstName?: string;
        lastName?: string;
        email: string;
    };
    error?: string;
}

// Customer registration
export async function registerCustomer(
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
): Promise<ShopifyAuthResponse> {
    try {
        console.log('🔄 Attempting to register customer:', { email, firstName, lastName });

        const response = await fetch('/api/auth/shopify/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
            }),
        });

        const result = await response.json();
        console.log('📥 Registration API response:', result);

        if (!response.ok) {
            console.error('❌ Registration failed:', result.error);
            return {
                success: false,
                error: result.error || 'Registration failed. Please try again.',
            };
        }

        console.log('✅ Registration successful:', result);
        return result;
    } catch (error) {
        console.error('💥 Registration error:', error);
        console.error('Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
        });
        return {
            success: false,
            error: 'Registration failed. Please try again.',
        };
    }
}

// Debug function to check customer account status
export async function debugCustomerAccount(email: string): Promise<{
    exists: boolean;
    status?: string;
    error?: string;
    details?: any;
}> {
    try {
        console.log('🔍 Debugging customer account:', { email });

        // Try password recovery to check if account exists
        const recoveryResult = await recoverPassword(email);

        if (recoveryResult.success) {
            return {
                exists: true,
                status: 'Account exists and password recovery email sent',
                details: { email }
            };
        } else {
            return {
                exists: false,
                status: 'Account not found',
                error: recoveryResult.error,
                details: { email }
            };
        }
    } catch (error) {
        console.error('💥 Debug error:', error);
        return {
            exists: false,
            error: 'Failed to check account status',
            details: { email }
        };
    }
}

// Check if customer account exists (for password recovery guidance)
export async function checkCustomerExists(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
        console.log('🔍 Checking if customer exists:', { email });

        // Try to recover password - this will succeed if account exists
        const response = await shopifyClient.request(CUSTOMER_RECOVER_MUTATION, {
            email,
        });

        const { customerRecover } = response as any;

        if (customerRecover.customerUserErrors.length > 0) {
            const error = customerRecover.customerUserErrors[0];
            if (error.code === 'CUSTOMER_NOT_FOUND') {
                return { exists: false };
            }
            return { exists: false, error: error.message };
        }

        return { exists: true };
    } catch (error) {
        console.error('Error checking customer existence:', error);
        return { exists: false, error: 'Failed to check account status' };
    }
}

// Customer login
export async function loginCustomer(
    email: string,
    password: string
): Promise<ShopifyAuthResponse> {
    try {
        console.log('🔄 Attempting to login customer:', { email });

        const response = await shopifyClient.request(CUSTOMER_ACCESS_TOKEN_CREATE_MUTATION, {
            input: { email, password },
        });

        console.log('📥 Login response:', response);

        const { customerAccessTokenCreate } = response as any;

        if (customerAccessTokenCreate.customerUserErrors.length > 0) {
            const error = customerAccessTokenCreate.customerUserErrors[0];
            console.error('❌ Login failed with Shopify error:', error);

            // Provide specific error messages based on error code
            let errorMessage = error.message;
            if (error.code === 'UNIDENTIFIED_CUSTOMER') {
                errorMessage = 'No account found with this email and password. If you completed verification on Shopify, you may have set a different password. Please try the password you set during verification, or use "Forgot Password" to reset it.';
            } else if (error.code === 'CUSTOMER_DISABLED') {
                errorMessage = 'Account exists but needs email verification. Please check your email and click the verification link.';
            }

            return {
                success: false,
                error: errorMessage,
            };
        }

        console.log('✅ Login successful:', customerAccessTokenCreate.customerAccessToken);
        return {
            success: true,
            customerAccessToken: customerAccessTokenCreate.customerAccessToken,
        };
    } catch (error) {
        console.error('💥 Login error:', error);
        console.error('Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
        });
        return {
            success: false,
            error: 'Login failed. Please try again.',
        };
    }
}

// Password recovery
export async function recoverPassword(email: string): Promise<{ success: boolean; error?: string }> {
    try {
        console.log('🔄 Attempting password recovery for:', { email });

        const response = await shopifyClient.request(CUSTOMER_RECOVER_MUTATION, {
            email,
        });

        console.log('📥 Password recovery response:', response);

        const { customerRecover } = response as any;

        if (customerRecover.customerUserErrors.length > 0) {
            const error = customerRecover.customerUserErrors[0];
            console.error('❌ Password recovery failed:', error);

            // Provide more helpful error messages
            let errorMessage = error.message;
            if (error.code === 'CUSTOMER_NOT_FOUND') {
                errorMessage = 'No account found with this email address. Please check the email address or create a new account.';
            } else if (error.message.includes('Could not find customer')) {
                errorMessage = 'No account found with this email address. The account may not exist or may have been created with a different email.';
            }

            return {
                success: false,
                error: errorMessage,
            };
        }

        console.log('✅ Password recovery email sent successfully');
        return { success: true };
    } catch (error) {
        console.error('💥 Password recovery error:', error);
        return {
            success: false,
            error: 'Password recovery failed. Please try again.',
        };
    }
}

// Password reset
export async function resetPassword(
    resetToken: string,
    password: string
): Promise<ShopifyAuthResponse> {
    try {
        const response = await shopifyClient.request(CUSTOMER_RESET_MUTATION, {
            input: { resetToken, password },
        });

        const { customerReset } = response as any;

        if (customerReset.customerUserErrors.length > 0) {
            const error = customerReset.customerUserErrors[0];
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: true,
            customerAccessToken: customerReset.customerAccessToken,
        };
    } catch (error) {
        console.error('Password reset error:', error);
        return {
            success: false,
            error: 'Password reset failed. Please try again.',
        };
    }
}

// Google OAuth helper functions
export function initiateGoogleAuth() {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/google/callback`;

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${googleClientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `response_type=code&` +
        `scope=${encodeURIComponent('email profile')}&` +
        `access_type=offline&` +
        `prompt=consent`;

    window.location.href = googleAuthUrl;
}

// Handle Google OAuth callback and create/update customer
export async function handleGoogleAuthCallback(
    code: string
): Promise<GoogleAuthResponse> {
    try {
        // Exchange code for tokens
        const tokenResponse = await fetch('/api/auth/google/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenData.success) {
            return {
                success: false,
                error: tokenData.error || 'Google authentication failed',
            };
        }

        // Get user info from Google
        const userInfoResponse = await fetch('/api/auth/google/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ accessToken: tokenData.accessToken }),
        });

        const userInfo = await userInfoResponse.json();

        if (!userInfo.success) {
            return {
                success: false,
                error: 'Failed to get user information',
            };
        }

        // Create or update customer in Shopify
        const customerResponse = await createOrUpdateCustomerFromGoogle(userInfo.user);

        return customerResponse;
    } catch (error) {
        console.error('Google auth callback error:', error);
        return {
            success: false,
            error: 'Google authentication failed',
        };
    }
}

// Create or update customer from Google data
async function createOrUpdateCustomerFromGoogle(
    googleUser: any
): Promise<GoogleAuthResponse> {
    try {
        // This would typically involve creating a customer in Shopify
        // For now, we'll return a placeholder response
        console.log('Google user data:', googleUser);

        return {
            success: false,
            error: 'Google OAuth integration not fully implemented yet',
        };
    } catch (error) {
        console.error('Error creating customer from Google:', error);
        return {
            success: false,
            error: 'Failed to create customer account',
        };
    }
}