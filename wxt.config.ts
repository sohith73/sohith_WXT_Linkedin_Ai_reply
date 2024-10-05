import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  // name: '',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    web_accessible_resources: [
      {
        resources: ["injected.js","assets/Frame.svg"],
        matches: ["*://*/*"],
      },
      
    ],
  },
  runner: {
    startUrls: ['https://in.linkedin.com/'],
  },
});
