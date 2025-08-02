# Google OAuth Setup Guide

## Environment Variables

Add these variables to your `.env.local` file:

```env
# Google OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## Setting up Google OAuth

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API

### 2. Create OAuth 2.0 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:3001/auth/google/callback` (for development)
   - `https://yourdomain.com/auth/google/callback` (for production)

### 3. Get Your Credentials
1. Copy the Client ID and Client Secret
2. Add them to your `.env.local` file

## Shopify Customer Accounts Setup

### 1. Enable Customer Accounts
1. Go to your Shopify Admin → Settings → Checkout
2. Under "Customer accounts", select "Accounts are optional" or "Accounts are required"
3. Save changes

### 2. Configure Customer Permissions
1. Go to Settings → Apps and sales channels
2. In your app, ensure these permissions are enabled:
   - `read_customers`
   - `write_customers`

## Testing the Setup

1. Start your development server: `npm run dev`
2. Go to `/login`
3. Click "Continue with Google"
4. Complete the OAuth flow
5. You should be redirected back and logged in

## Troubleshooting

### Common Issues:
- **"Invalid redirect URI"**: Check that your redirect URI matches exactly in Google Console
- **"Client ID not found"**: Verify your environment variables are loaded
- **"Access denied"**: Check that Google+ API is enabled

### Development vs Production:
- Use different OAuth credentials for development and production
- Update redirect URIs accordingly
- Use environment variables to switch between them 