/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
 
    serverOptions: {
      host: '0.0.0.0',
      port: 3000,
    
  }
  
}

module.exports = nextConfig
