# Shopify Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Shopify Configuration
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here
SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_access_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id_here

# Optional: Payment (if using Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

## Getting Shopify API Tokens

### 1. Storefront Access Token
1. Go to your Shopify Admin → Settings → Apps and sales channels
2. Click "Develop apps" → "Create an app"
3. Configure app permissions:
   - `read_products`
   - `read_collections`
   - `read_cart`
   - `write_cart`
   - `read_customers`
   - `write_customers`
4. Install the app and copy the Storefront access token

### 2. Admin Access Token
1. In the same app, go to "API credentials"
2. Generate an Admin API access token
3. Configure permissions:
   - `read_customers`
   - `write_customers`
   - `read_orders`
   - `write_orders`
   - `read_inventory`
   - `write_inventory`

## Shopify Store Setup

### 1. Products & Collections
1. **Add Products**: Go to Products → Add product
2. **Create Collections**: Go to Products → Collections → Create collection
3. **Set up Inventory**: Enable inventory tracking for products

### 2. Checkout Settings
1. Go to Settings → Checkout
2. Configure:
   - Customer accounts (optional/required)
   - Payment methods
   - Shipping rates
   - Tax settings

### 3. Customer Metafields (for Wishlist)
1. Go to Settings → Custom data → Customers
2. Add metafield:
   - Namespace: `custom`
   - Key: `wishlist`
   - Type: `JSON`

## Testing the Setup

1. Start your development server: `npm run dev`
2. Check the console for any API errors
3. Test product listing on the homepage
4. Test adding items to cart
5. Test wishlist functionality (requires customer login)

## Common Issues

### API Errors
- Check that your access tokens are correct
- Verify store domain format (should be `store-name.myshopify.com`)
- Ensure app permissions are properly configured

### CORS Issues
- Make sure you're using the correct API endpoints
- Check that your store domain is correct

### Authentication Issues
- Verify customer login is working
- Check that customer metafields are properly configured 