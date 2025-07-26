import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  enhance({ app }) {
    console.log(app);
  },
  setup() {},
  rootComponents: []
});
