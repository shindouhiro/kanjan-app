import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果部署到 GitHub Pages 且不是顶级域名，取消下面的注释并修改为仓库名
  basePath: process.env.NODE_ENV === 'production' ? '/kanjan-app' : '',
};

export default nextConfig;
