/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 自动检测环境：在 GitHub Actions 构建时使用子目录路径，在 Netlify 或本地开发时使用根路径
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/kanjan-app' : '',
};

export default nextConfig;
