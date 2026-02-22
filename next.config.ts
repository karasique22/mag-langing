import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
	reactCompiler: true,
	basePath: isProd ? '/mag-landing' : '',
	images: { unoptimized: true }
}

export default nextConfig
1
