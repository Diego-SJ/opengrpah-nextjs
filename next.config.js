/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['firebasestorage.googleapis.com']
	}
};

module.exports = nextConfig;
