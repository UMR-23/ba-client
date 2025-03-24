const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    port: 9090,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 目标服务器地址  
        changeOrigin: true, // 是否改变源  
        pathRewrite: { '^/api': '' }, // 路径重写  
      },
      // 可以添加更多的代理规则  
    },
  },
  // 其他配置...  
};
