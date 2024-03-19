/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["154.53.59.178", "pbs.twimg.com"]
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    // Enable polling based on env variable being set
    if(process.env.NEXT_WEBPACK_USEPOLLING) {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 300
      }
    }
    return config
  },
}

export default nextConfig
