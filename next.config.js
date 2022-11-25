/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['opgg-static.akamaized.net', 'ddragon.leagueoflegends.com'],
  },
};

module.exports = nextConfig;
