module.exports= {
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'src':'@',
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'views': '@/views',
                'http': '@/http',
                'utils':'@/utils'
            }
        }
    },
    publicPath: './',
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        //以上为使用svg图片配置
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // 要公用的scss的路径
                    resources: './src/css/mixin.scss'
                })
                .end()
        })
        //   以上为sccc配置,全局引入scss文件
    }

}
