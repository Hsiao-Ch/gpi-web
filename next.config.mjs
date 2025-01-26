/** @type {import('next').NextConfig} */
const nextConfig = {
  'output': 'export', // <=== enables static exports
  'reactStrictMode': true,
  'distDir': 'dist',
  'images': { 'unoptimized': true, },
  'webpack': config => {
    config.resolve.alias['pdfjs-dist/build/pdf'] = 'pdfjs-dist/es5/build/pdf.js';
    config.resolve.alias['pdfjs-dist/build/pdf.worker'] = 'pdfjs-dist/es5/build/pdf.worker.js';
    return config;
  },
};

export default nextConfig;