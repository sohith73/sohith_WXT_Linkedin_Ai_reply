

export default defineContentScript({
  matches: ['*://*.google.com/*', '*://www.linkedin.com/*', 'https://in.linkedin.com/', '*://in.linkedin.com/*'],
  // runAt: 'document_start',
  // runAt: 'document_idle',
  runAt: "document_end",
  cssInjectionMode: 'ui',
  async main() {
    // alert("done dona don a don")
    console.log('Hello content.');
    console.log('LinkedIn content script loaded');
    console.log("Injecting script...");
    await injectScript("/injected.js", {
      keepInDom: true,
    });
    console.log("Done!");
    // const demoElement: HTMLDivElement | null = document.querySelector('.MV3Tnb');
    // if (demoElement) {
    //   demoElement.textContent = 'Hello Sohith';
    //   // Test()
    // }
    // else{clg("error 6")}
    // const mainButton: Promise<HTMLElement | null> = waitForElement('#msg-overlay', 5000);
    // console.log(mainButton)
  },

});
