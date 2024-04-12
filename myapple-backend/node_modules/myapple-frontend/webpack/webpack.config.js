const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (envProps) => {
  // console.log(process.env.NODE_ENV)
  // const env = 'dev'
  // process.env.NODE_ENV ||= env
  const envConfig = require(`./webpack.dev.js`)

  return merge(commonConfig, envConfig)
}