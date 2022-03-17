### Vue实现`Gzip`压缩

#### Webpack新版本

首先确定`webpack`版本，根据使用的`vue-cli`版本来确定怎么使用

基于最新的 `vue-cli3`讲一下实现方式

首先是安装依赖

```js
npm i -D compression-webpack-plugin
```

修改存在的 `webpack.config.js`

```js
configureWebpack: config => {
  if (process.env.NODE_ENV === 'production') {
    // 生产环境
    config.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  } else {
    // 开发环境
  }
}
```
修改对应存在的`vue.config.js`

```js
// 这里使用的 vue.config.js, webpack.config.js 里面内容大部分相同，只是vue.config.js里面是链式调用的。
  const compressionWebpackPlugin = require('compression-webpack-plugin')
  configureWebpack: {
    plugins: [new compressionWebpackPlugin({
      filename: '[path].gz[query]', //压缩后的文件名
      algorithm: 'gzip', // 压缩格式 有：gzip、brotliCompress,
      test: /\.(js|css|svg)$/,
      threshold: 10240,// 只处理比这个值大的资源，按字节算
      minRatio: 0.8, //只有压缩率比这个值小的文件才会被处理，压缩率=压缩大小/原始大小，如果压缩后和原始文件大小没有太大区别，就不用压缩
      deleteOriginalAssets: false //是否删除原文件，最好不删除，服务器会自动优先返回同名的.gzip资源，如果找不到还可以拿原始文件
    })],

```



#### Vite配置`Gzip`压缩

Vite开发了了一个专门的插件，所以也需要安装

```js
npm install vite-plugin-compression
```

然后再 `vite.config.js`里使用，使用方式很简单

```js
import viteCompression from 'vite-plugin-compression';
plugins: [
    viteCompression()
]
```

### 服务器环境配置

服务器也需要配置的

#### Nginx

```nginx
 #gzip  on;
    gzip            on;
    gzip_min_length 1000;
    gzip_proxied    expired no-cache no-store private auth;
    gzip_types      text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

```

