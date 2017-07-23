require('dotenv').config()
const webpack = require('webpack')
const { resolve, join } = require('path')
const glob = require('glob-all')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')

const PORT = process.env.PORT || '4000'
const ENV = process.env.ENV || 'production'

module.exports = {
  entry: {
    app: resolve(__dirname, 'src/index.js'),
    vendors: [
      'react',
      'react-dom',
      'bulma',
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
        PORT: JSON.stringify(PORT),
      },
    }),
    new ExtractTextPlugin('styles.css'),
    new PurifyCSSPlugin({
      minimize: true,
      paths: glob.sync([
        join(__dirname, './index.html'),
        join(__dirname, './src/*.js')
      ]),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
    })
  ],
}
