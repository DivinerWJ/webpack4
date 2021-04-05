/*
 * @Description: my-loader
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2021-04-04 10:01:44
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2021-04-05 12:21:19
 * @FilePath: \tb1212d:\workspace\webpack4\webpack.config.js
 */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: [
          // myLoader
          path.resolve(__dirname, './loader/myLoader.js')
        ]
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}