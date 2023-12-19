import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.js',
      userscript: {
        name: '雨课堂 helper',
        version: '1.0.0',
        description: '雨课堂辅助工具：课堂习题提示，自动作答习题',
        author: 'hotwords123',
        match: ['https://pro.yuketang.cn/lesson/fullscreen/v3/*'],
        icon: 'https://www.google.com/s2/favicons?sz=64&domain=yuketang.cn',
        namespace: 'npm/vite-plugin-monkey',
        grant: 'none',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});
