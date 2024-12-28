
/**
 * 本番相当の環境であるかどうかを判定する関数
 * @param {string} appEnv
 * @returns 本番相当の環境であれば true
 */
const isProductionEquivalent = (appEnv) => {
  return (
    appEnv === 'production' ||
    appEnv === 'staging' ||
    appEnv === 'development'
  )
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: isProductionEquivalent(process.env.APP_ENV)
    ? ['page.tsx']
    : ['page.tsx', 'page.dev.tsx'],
}

module.exports = nextConfig;