/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'], // Add any other image domains you need
  },
  webpack: (config, { isServer }) => {
    // Add webpack configuration to handle the undici issue
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'undici': false,
      };
    }
    return config;
  },
}

module.exports = nextConfig