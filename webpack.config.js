//webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    maze: './src/ts/maze.ts',
    sudoku: './src/ts/sudoku.ts',
    // main:'./src/ts/index.ts'
    //... repeat until example 4
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    , {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
   plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
           template: 'src/sudoku.html',
           filename: 'sudoku.html',
           chunks: ['sudoku'],
           minify: {
                  removecomments: true,
                  collapsewhitespace: true
          }
            
         }),
        new HtmlWebpackPlugin({
           template: 'src/maze.html',
           filename: 'maze.html',
           minify: {
                  removecomments: true,
                  collapsewhitespace: true
          },
           chunks: ['maze']

         }),
       // new HtmlWebpackPlugin({
       //   template: 'src/maze.html',
       //   filename: 'maze.html',
       //   chunks: ['maze']
       // })
    ],
};
