// 导入路径处理模块
var path = require('path');
// 导入自动生成html文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');


// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
  entry: path.join(__dirname, './src/js/main.js'), // 项目的入口文件
  output: {
    path: path.join(__dirname, 'dist'), // 配置输出文件的存放路径
    filename: 'bundle.js' // 配置输出文件的文件名称
  },
  plugins: [// 添加plugins节点配置插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 需要配置的模板路径
      filename: 'index.html' // 自动生成的HTML文件的名称
    })
  ],
  module: {// 配置第三方loader模块
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },                  // CSS文件的匹配规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  // less文件的匹配规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },  // sass文件的匹配规则
      { test: /\.(jpg|png|svg|gif)$/, use: 'url-loader' },                      // css中的图片匹配规则
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },          // 高级JS语法的匹配规则
      { test: /\.vue$/, use: 'vue-loader',exclude: /node_modules/},             // 编译Vue组件的loader
    ]
  }
}
