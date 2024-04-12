const { EnvironmentPlugin, EvalDevToolModulePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
   plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    usedExports: true,
    removeAvailableModules: true,
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          name: 'myapple.frontend',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'myapple.frontend',
    },
  },
}