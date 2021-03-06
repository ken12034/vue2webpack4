const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      './src/main.js',
      './src/sass/main.sass',
    ],
  },
  output: {
    path: __dirname + "/build/",
    filename: "main.js"
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json', 'sass', 'css'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader?name=[name].[ext]'
          // [
          
          // 'url-loader?limit=10000',
          //  'img-loader'
          //]
      },

      {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
              loader:'url-loader?name=[name].[ext]',
              options: {
                  name: 'fonts/[name].[ext]'
              }
          }]                      
      },

    ],
  },

  plugins: [
    new CleanWebpackPlugin('./build', { allowExternal: true }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),

    new VueLoaderPlugin(),
  ],

};
