const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', //개발 중. 배포 때는 production
  devtool: 'eval', //개발 시는 속도 빠른 eval, 배포할 때는 hidden-source-map 을 많이 씀.
  resolve: {
    extensions: ['.js', '.vue'], //확장자 처리로 import할 때 확장자 이름 안 붙여도 됨.
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
      //..vue 파일을 만나면 vue-loader 가 처리하란 뜻.
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
      //절대경로를 쓰면 귀찮으니까 path 라는 node 내 라이브러리를 사용하여 접근한다.
  },
};