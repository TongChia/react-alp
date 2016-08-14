/**
 * Webpack configuration base class
 */
const path = require('path');
const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  get includedPackages() {
    return [].map((pkg) => path.join(npmBase, pkg));
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param data Keys to assign
   */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @param {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the absolute path to docs directory
   * @return {String}
   */
  get docsPathAbsolute() {
    return path.resolve('./docs');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  get testPathAbsolute() {
    return path.resolve('./test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  get defaultSettings() {
    return {
      context: this.docsPathAbsolute,
      debug: false,
      devtool: 'eval',
      devServer: {
        contentBase: './docs/',
        publicPath: '/assets/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8080
      },
      entry: './index.js',
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            include: this.srcPathAbsolute,
            loader: 'eslint'
          }
        ],
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
            include: [].concat(
              this.includedPackages,
              [this.srcPathAbsolute, this.docsPathAbsolute]
            ),
            loaders: ['react-hot', 'babel']
          }
        ]
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: './assets/'
      },
      plugins: [],
      resolve: {
        alias: {
          actions: `${this.docsPathAbsolute}/actions/`,
          components: `${this.srcPathAbsolute}/components/`,
          config: `${this.docsPathAbsolute}/config/${this.env}.js`,
          images: `${this.docsPathAbsolute}/images/`,
          sources: `${this.docsPathAbsolute}/sources/`,
          stores: `${this.docsPathAbsolute}/stores/`,
          styles: `${this.docsPathAbsolute}/styles/`
        },
        extensions: ['', '.js', '.jsx'],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
