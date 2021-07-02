const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 开发模式
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: "/assets/", // string
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // css转化成js
          'css-loader', // 即url import进行处理
          // 'postcss-loader', // css 预处理器
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // css转化成js
          'css-loader', // 即url import进行处理
          'less-loader', // 把less转化为css 
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // css转化成js
          'css-loader', // 即url import进行处理
          'sass-loader', // 把less转化为css 
        ]
      },
      // {
      //   test: /\.(jpg|png|bmp|gif|svg)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       esModule: false, // 加上这个之后就不用加 src.default的default了，也就是直接用src这个字段就好了
      //       name: '[hash:10].[ext]', 
      //     }
      //   }]
      // },
      {
        test: /\.(jpg|png|bmp|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: { 
            esModule: false,
            name: '[hash:10].[ext]', 
            limit: 4 * 1024, // 以8k为分界线，如果图片小于8K就把图片变为base64字符串插入html，否则和file-loader作用一样
          }
        }]
      }
    ]
  },
  // express启用一个https的服务，通过它可以访问产出的文件
  devServer: {
    // publicPath: '/',
    // contentBase: path.join(__dirname, 'dist'), // 额外的静态文件目录
    contentBase: path.join('public'), // 额外的静态文件目录
    // dist 是静态目录，public是额外的静态目录
    compress: true, // 是否启用压缩 gzip
    port: 8080, // 服务器监听的端口号 
    //  * 输入之后到底访问的什么？
    //  * 答：输入http://localhost:8080之后其实就是访问的dist目录，比如：http://localhost:8080/main.js就会访问dist目录下边的main.js
    //  * / 
    open: true, // 是否打开浏览器进行访问
  }
};
