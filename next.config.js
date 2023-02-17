const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'platform',
		value: 'web',
	},
];

const moduleExports = {
	swcMinify: true,
	poweredByHeader: false,
	experimental: {
		optimisticClientCache: true,
		webVitalsAttribution: ['CLS', 'LCP'],
		profiling: true,
		nextScriptWorkers: true,
		appDir: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		];
	},
	reactStrictMode: false,
	images: {
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 86400,
		deviceSizes: [320, 640, 750, 828, 1080, 1200, 1320, 1920, 2640],
		imageSizes: [8, 16, 32, 48, 64, 96, 128, 256, 384],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},

};


module.exports = moduleExports


