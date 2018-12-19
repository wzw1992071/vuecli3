var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
   
    configureWebpack:(config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                }
            },
            externals:{
                'axios':'axios',
                '_':'_',
            },
        });
    },
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