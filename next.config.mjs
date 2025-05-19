/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
	domains: ['images.unsplash.com'],
  },
};
export default nextConfig;
nextConfig.images.remotePatterns = [
    {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
    },
];
delete nextConfig.images.domains;