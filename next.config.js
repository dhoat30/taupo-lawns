/** @type {import('next').NextConfig} */
const nextConfig = {}
 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  env: { 
    phoneNumber: '0275276772', 
    email: 'info@taupolawns.nz', 
    businessName: "Taupo Lawns",
    

}
})


module.exports = withBundleAnalyzer(nextConfig)
