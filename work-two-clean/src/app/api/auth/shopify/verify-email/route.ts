import { NextRequest, NextResponse } from 'next/server';
import { gql } from 'graphql-request';
import { shopifyClient } from '@/lib/Shopify';

const CUSTOMER_ACTIVATE_MUTATION = gql`
  mutation customerActivate($input: CustomerActivateInput!) {
    customerActivate(input: $input) {
      customer {
        id
        firstName
        lastName
        email
        phone
      }
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
        const { activationToken, password } = await request.json();

        console.log('🔐 Custom email verification attempt:', { activationToken: activationToken ? 'PROVIDED' : 'MISSING' });

        if (!activationToken || !password) {
            return NextResponse.json(
                { success: false, error: 'Activation token and password are required' },
                { status: 400 }
            );
        }

        // Activate customer using Shopify Storefront API
        const response = await shopifyClient.request(CUSTOMER_ACTIVATE_MUTATION, {
            input: {
                activationToken,
                password,
            },
        });

        console.log('📥 Customer activation response:', response);

        const { customerActivate } = response as any;

        if (customerActivate.customerUserErrors.length > 0) {
            const error = customerActivate.customerUserErrors[0];
            console.error('❌ Customer activation failed:', error);
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 400 }
            );
        }

        console.log('✅ Customer activated successfully');

        return NextResponse.json({
            success: true,
            customerAccessToken: customerActivate.customerAccessToken,
            customer: customerActivate.customer,
        });
    } catch (error) {
        console.error('💥 Custom email verification error:', error);
        return NextResponse.json(
            { success: false, error: 'Email verification failed. Please try again.' },
            { status: 500 }
        );
    }
} 