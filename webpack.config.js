
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const nodeExternals = require('webpack-node-externals');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

const serverConfig = {
  target: 'node',
  entry: {
    page1: './serverRouter.js',
  },
  resolve: {
    alias: {
      action: path.join(__dirname, './web/action')
    },
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './app/build'),
    libraryTarget: 'umd'
  },
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader'
        } 
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  }
};

const clientConfig = {
  entry: {
    page1: './clientRouter.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public'),
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      action: path.join(__dirname, './web/action')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader'
        } 
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('precss'),
                require('autoprefixer')
              ],
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              // modifyVars: theme   //antd默认主题样式
            }
          }
        ],
      },
    ]
  },

  plugins: [
    // 提取样式，生成单独文件
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].chunk.css`
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env.WEBPACK_WEB': true
    })
  ]

};

module.exports = [serverConfig, clientConfig]