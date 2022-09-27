/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-27 11:50:43
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-27 12:03:21
 * @FilePath: /vue3-ts-element/vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': '',
      '^/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
    }
  },
  build: {
    reportCompressedSize: false, /* 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能 */ 
    outDir: 'dist', /* 指定输出路径 */
    cssCodeSplit: false, /* 整个项目中的所有 CSS 将被提取到一个 CSS 文件中 */
    chunkSizeWarningLimit: 1000, /* chunk 大小警告的限制（以 kbs 为单位） */
    sourcemap: true, /* 构建后是否生成 source map 文件 */
    manifest: true, /*  */
    assetsDir: 'static/img/', /* 指定生成静态资源的存放路径 */
    emptyOutDir: true, /* 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录 */
    rollupOptions: {
      output: {
          chunkFileNames: 'static/js/[name].[hash].js',
          entryFileNames: 'static/js/[name].[hash].js',
          assetFileNames: 'static/[ext]/[name].[hash].[ext]',
      },
    }
  },
})