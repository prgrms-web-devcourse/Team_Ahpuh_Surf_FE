const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  plugins: [['lodash-es']],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    config.resolve.alias['next/router'] = require.resolve(
      '../__mocks__/next/router.js',
    )
    config.resolve.alias['next/link'] = require.resolve(
      '../__mocks__/next/link.js',
    )
    config.resolve.alias['next/image'] = require.resolve(
      '../__mocks__/next/image.js',
    )
    return config
  },
}
