# Environment Variables Setup Guide

## 🚨 **Required: Create .env.local file**

You need to create a `.env.local` file in your project root with the following variables:

```bash
# Create the file
touch .env.local
```

## 📝 **Add these variables to .env.local:**

```env
# Shopify Configuration
# Replace these values with your actual Shopify store information

# Your Shopify store domain (e.g., your-store.myshopify.com)
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com

# Storefront API access token (for public data like products, collections)
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here

# Admin API access token (for customer data, orders, etc.)
SHOPIFY_ADMIN_ACCESS_TOKEN=your_admin_access_token_here

# Next.js Configuration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
```

## 🔧 **How to get these values:**

### 1. **SHOPIFY_STORE_DOMAIN**
- Go to your Shopify admin
- Look at the URL: `https://your-store-name.myshopify.com`
- Use: `your-store-name.myshopify.com`

### 2. **SHOPIFY_STOREFRONT_ACCESS_TOKEN**
- Go to Shopify Admin → Settings → Apps and sales channels
- Click "Develop apps" → "Create an app"
- Name your app (e.g., "My Store App")
- Go to "Configuration" → "Storefront API"
- Click "Configure" → "Install app"
- Copy the "Storefront access token"

### 3. **SHOPIFY_ADMIN_ACCESS_TOKEN**
- In the same app, go to "Configuration" → "Admin API"
- Click "Configure" → "Install app"
- Copy the "Admin API access token"

## ✅ **After setup:**

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test the connection:**
   - Visit `http://localhost:3001`
   - You should see products loading from Shopify

## 🚨 **Common Issues:**

- **"undefined/api/2023-10/graphql.json"**: Missing `SHOPIFY_STORE_DOMAIN`
- **"401 Unauthorized"**: Invalid access tokens
- **"404 Not Found"**: Incorrect store domain

## 📞 **Need Help?**

If you're still having issues:
1. Double-check your store domain format
2. Verify your access tokens are correct
3. Make sure the app has the right permissions
4. Restart your development server after changes 