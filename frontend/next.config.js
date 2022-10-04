/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias = {
      "~": path.resolve(__dirname, "./src/"),
    };
    return config;
  },
};

module.exports = nextConfig;
