/**
 * @type {import('next').NextConfig} 
 */

const nextConfig = {
  output: 'export',
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  images: {
    unoptimized: true
  },
};
