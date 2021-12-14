module.exports = {
  reactStrictMode: false, // MUI 버전 4는 strict mode를 지원하지 않음
  images: {
    domains: ['picsum.photos'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
