module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * publicPath: process.env.NODE_ENV==='production'?"https://cdn.aliyun.com/front/":'front/',
     */
    // 基本路径
    //从 Vue CLI 3.3 起baseUrl已弃用，请使用publicPath
    publicPath: './',
    // 输出文件目录
    outputDir: 'mySelf',
    // eslint-loader 是否在保存的时候检查
    // lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    //compiler: false,

    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);

    },
    // configureWebpack: (config) => {
    //     config.externals = {
    //         'vue': 'Vue',
    //         'view-design': 'ViewUI',
    //         'vue-router': 'VueRouter',
    //         'vuex': 'Vuex',
    //         'axios': 'axios',
    //         'maptalks': 'maptalks'
    //     }
    // },
    //如果想要引入babel-polyfill可以这样写
    // configureWebpack: (config) => {
    //   config.entry = ["babel-polyfill", "./src/main.js"]
    // },

    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    //vueLoader: {},

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        //   extract: true,
        // 开启 CSS source maps?
        sourceMap: true,
        // css预设器配置项
        //   loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        // modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    //parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    //   pwa: {},

    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 30000,
        https: false,
        hot: true,
        // proxy: { // 设置代理
        //     '/api': {
        //         target: 'http://www.xxxxx.com/',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/api'
        //         }
        //     }
        // },
        // disableHostCheck: true
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}