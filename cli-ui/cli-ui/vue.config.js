module.exports = {
    // configureWebpack:{

    // },
    devServer:{
        proxy: {
            '/api': {
                target: 'http://test.dongpin.me',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                  }
            }
        }
    }
}