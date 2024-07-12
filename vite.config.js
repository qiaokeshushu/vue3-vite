import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 base 为 /admin。
  base: '/',
  server: {
    port: 3000,
    host: true,
    open: true,
    proxy: {
      '/api': {
        target:"http://122.112.180.184:8123/",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
        // rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports:["vue","vue-router"],
      dts: 'src/auto-import.d.ts',    // 路径下自动生成文件夹存放全局指令
      eslintrc: {
        enabled: true // 使用 eslint 配置
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       javascriptEnabled: true,
  //       additionalData: '@import "./src/assets/styles/index.scss";',
  //     },
  //   },
  // },
})
