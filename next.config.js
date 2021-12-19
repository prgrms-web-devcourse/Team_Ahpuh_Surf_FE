module.exports = {
  reactStrictMode: false, // MUI 버전 4는 strict mode를 지원하지 않음
  images: {
    domains: ['picsum.photos', 'team8-ahpuh.s3.ap-northeast-2.amazonaws.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
