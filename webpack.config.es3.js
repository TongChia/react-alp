var webpack = require('webpack');
var path = require('path');

var srcPath = path.resolve(__dirname, './src');
var docPath = path.resolve(__dirname, './docs');

module.exports = {
  context: docPath,
  debug: false,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './docs/',
    publicPath: '/assets/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.cssmodule\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]'
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      },
      {
        test: /\.styl$/,
        loaders: [
          'style',
          'css',
          'stylus'
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loaders: 'json'
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          srcPath,
          docPath
        ],
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  },
  output: {
    path: '/Users/tongchia/WorkSpaces/OpenProjects/react-alp/dist/assets',
    filename: 'app.js',
    publicPath: './assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      components: path.join(srcPath, 'components/'),
      stylus: path.join(srcPath, 'stylus/')
    },
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    modules: [
      srcPath,
      'node_modules'
    ]
  },
  stylus: {
    import: [
      path.join(srcPath, 'stylus/index.styl')
    ]
  }
};
