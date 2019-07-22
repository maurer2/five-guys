const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
      // SCSS
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: false,
              data: '@import "./src/styles/variables.scss";',
            },
          },
        ],
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // JSON
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.js', '.css', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true,
    }),
    /*
    new CopyWebpackPlugin([
      {
        from: './*.html',
      },
      {
        from: 'src/images',
        to: 'images',
      }
    ]),
    */
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    watchContentBase: true,
    hot: true,
    inline: true,
  },
};
