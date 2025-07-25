import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log(app);
    
  },
  setup() {},
  rootComponents: [],
})