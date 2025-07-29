import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '.vuepress/.cache',
    '.vuepress/.temp',
    '.vuepress/utils',
    '.vuepress/styles',
    '.vuepress/public',
    'dist'
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser, // 保留原有的浏览器全局变量
        // 自定义全局变量
        BMapGL: 'readonly',
        BMAP_SATELLITE_MAP: 'readonly'
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]);
