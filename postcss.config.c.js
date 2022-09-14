module.exports = {
    "plugins": [
        require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
        })
    ],
    css: {
        modules: {
            localsConvention: 'dashesOnly'
        },
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
            }
        }
    }
}