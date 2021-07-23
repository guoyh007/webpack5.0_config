const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// * 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// * js，这个插件不用装webpack自己有
const TerserPlugin = require('terser-webpack-plugin');
// 读取这个.env这个文件，把配置的key value写到process.env对象里边去
require('dotenv').config({ path: '.env' });
console.log("@NODE_ENV", process.env.NODE_ENV);

module.exports = {
  // mode: 'development', // 开发模式
  // mode: 'production', // 生产模式
  mode: 'none', // 设置为none，要不然就会自己选择了
  devtool: false,
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: "webpackNumbers",
    clean: true, // 每次打包前，清空dist目录下的文件；
  },
  optimization: {
    runtimeChunk: 'single', // tag1配置
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      // 压缩产生的html
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash: 6].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // css转化成js
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          // 'css-loader', // 即url import进行处理
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true, // 这个单词容易写错，注意
              // modules: false,
            }
          },
          // 'postcss-loader', // css 预处理器
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader', // css转化成js
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader', // 即url import进行处理
          'less-loader', // 把less转化为css 
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader', // css转化成js
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
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
      // {
      //   test: /\.(jpg|png|bmp|gif|svg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: { 
      //       esModule: false,
      //       name: '[hash:10].[ext]', 
      //       limit: 4 * 1024, // 以8k为分界线，如果图片小于8K就把图片变为base64字符串插入html，否则和file-loader作用一样
      //     }
      //   }]
      // },

      // * 现在都用 type: 'asset/resource' 这个东西
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // 相当于 file-loader
      },
      {
        test: /\.txt/,
        type: 'asset/source', // 相当于 raw-loader
      },
      //* 处理一些数据文件
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ]
  },
  // express启用一个https的服务，通过它可以访问产出的文件
  devServer: {
    publicPath: '/',
    // contentBase: path.join(__dirname, 'dist'), // 额外的静态文件目录
    contentBase: path.join('public'), // 额外的静态文件目录
    // dist 是静态目录，public是额外的静态目录
    compress: true, // 是否启用压缩 gzip
    port: 8080, // 服务器监听的端口号 
    //  * 输入之后到底访问的什么？
    //  * 答：输入http://localhost:8080之后其实就是访问的dist目录，比如：http://localhost:8080/main.js就会访问dist目录下边的main.js
    //  * / 
    open: true, // 是否打开浏览器进行访问
    hot: true, // 模块的热更新
    proxy: {
      "/api": 'http://localhost:3000',
    }
  }
};
