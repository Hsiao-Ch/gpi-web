/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/gpi-web",
  assetPrefix: "/gpi-web",
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;