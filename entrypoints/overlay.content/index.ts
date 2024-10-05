import './style.css';
export default defineContentScript({
     matches: ['*://google.com/*', '*://duckduckgo.com/*'],
     cssInjectionMode: 'manual',
     main(ctx) {
          // ...
     },
});