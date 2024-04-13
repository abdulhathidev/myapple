// const { merge } = require('webpack-merge')
// const commonConfig = require('./webpack.common')

module.exports = (envProps) => {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ]
  }
  // console.log(process.env.NODE_ENV)
  // const env = 'dev'
  // process.env.NODE_ENV ||= env
  const envConfig = require(`./webpack.dev.js`)

  return merge(commonConfig, envConfig)
}
