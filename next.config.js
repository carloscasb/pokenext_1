/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
} 

module.exports = nextConfig   ---->Origem
*/
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.traction.one"]
  }
}