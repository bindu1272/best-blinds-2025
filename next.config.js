/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: `${process.env.BACKEND_URL}/:path*`, // Proxy to backend
          },
        ];
      },
}

module.exports = nextConfig
