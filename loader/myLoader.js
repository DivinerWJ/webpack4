/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: DivinerWJ
 * @Date: 2021-04-05 12:05:10
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2021-04-05 12:23:09
 * @FilePath: \tb1212d:\workspace\webpack4\loader\myLoader.js
 */

module.exports = function(params) {
  return params.replace('World', 'DivinerWJ');
}