import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入 Vue 组件插件
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标插件解析器
        IconsResolver({
          // 指定图标的前缀，使之可以以 <icon-xxx /> 的形式使用
          prefix: 'icon',
          // 指定 Element Plus 图标集
          enabledCollections: ['ep']
        }),
      ],
    }),
    // 配置 unplugin-icons 插件
    Icons({
      autoInstall: true,  // 自动安装图标组件
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
