import { defineConfig } from 'vite'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

import react from '@vitejs/plugin-react'
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'

import postCssToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: name => {
            return `zarm/es/${name}/style/css`
          }
        }
      ]
    })
  ],
  css: {
    postcss:{
      plugins:[
        postCssToRem({
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
      })
      ]
    },
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname, 'src/views'),
    }
  },
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://api.chennick.wang/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }
})
