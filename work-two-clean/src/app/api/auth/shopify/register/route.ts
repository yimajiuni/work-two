import { NextRequest, NextResponse } from 'next/server';
import { gql } from 'graphql-request';
import { shopifyClient } from '@/lib/Shopify';

// GraphQL mutations for customer creation using Storefront API
const CUSTOMER_CREATE_MUTATION = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        firstName
        lastName
        email
        phone
      }
      customerUserErrors {
        code
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

export async function POST(request: NextRequest) {
    try {
        const { email, password, firstName, lastName } = await request.json();

        console.log('🔐 Server-side registration attempt:', { email, firstName, lastName });

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const input: any = {
            email,
            password,
        };

        if (firstName) input.firstName = firstName;
        if (lastName) input.lastName = lastName;

        console.log('📤 Creating customer with input:', input);

        // Step 1: Create customer using Storefront API
        const createResponse = await shopifyClient.request(CUSTOMER_CREATE_MUTATION, {
            input,
        });

        console.log('📥 Customer creation response:', createResponse);

        const { customerCreate } = createResponse as any;

        if (customerCreate.customerUserErrors.length > 0) {
            const error = customerCreate.customerUserErrors[0];
            console.error('❌ Customer creation failed:', error);
            console.error('❌ Error details:', {
                code: error.code,
                field: error.field,
                message: error.message
            });

            // Handle email verification requirement
            if (error.code === 'CUSTOMER_DISABLED' && error.message.includes('verify your email')) {
                return NextResponse.json(
                    {
                        success: false,
                        error: 'Account created! Please check your email and click the verification link to activate your account. You will be redirected to Shopify to complete verification. After verification, return here to log in.',
                        requiresVerification: true,
                        verificationInstructions: 'Check your email for verification link → Click link → Complete verification on Shopify → Return here to login'
                    },
                    { status: 400 }
                );
            }

            // Handle customer already exists
            if (error.code === 'CUSTOMER_DISABLED' || error.message.includes('already been taken')) {
                return NextResponse.json(
                    {
                        success: false,
                        error: 'An account with this email already exists. Please try logging in instead.',
                        accountExists: true
                    },
                    { status: 400 }
                );
            }

            return NextResponse.json(
                { success: false, error: error.message },
                { status: 400 }
            );
        }

        console.log('✅ Customer created successfully:', customerCreate.customer);

        // Step 2: Generate access token using the same credentials
        const tokenResponse = await shopifyClient.request(CUSTOMER_ACCESS_TOKEN_CREATE_MUTATION, {
            input: { email, password },
        });

        console.log('📥 Token generation response:', tokenResponse);

        const { customerAccessTokenCreate } = tokenResponse as any;

        if (customerAccessTokenCreate.customerUserErrors.length > 0) {
            const error = customerAccessTokenCreate.customerUserErrors[0];
            console.error('❌ Token generation failed:', error);
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 400 }
            );
        }

        console.log('✅ Registration and token generation successful');

        return NextResponse.json({
            success: true,
            customerAccessToken: customerAccessTokenCreate.customerAccessToken,
            customer: customerCreate.customer,
        });
    } catch (error) {
        console.error('💥 Server-side registration error:', error);
        return NextResponse.json(
            { success: false, error: 'Registration failed. Please try again.' },
            { status: 500 }
        );
    }
} 