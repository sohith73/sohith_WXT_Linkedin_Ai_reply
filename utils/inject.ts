import { PublicPath } from "wxt/browser";
import { getList, getMainDetails } from './finder'

export async function injectScript(
     path: PublicPath,
     options?: { keepInDom?: boolean },
): Promise<void> {
     const url = browser.runtime.getURL(path);
     const script = document.createElement("script");
     console.log(url)
     alert("Hello working ")
     const mainButton = await waitForElement('#msg-overlay', 5000);
     // window.onload = preloadImages;
     if (mainButton) {
          console.log("FOUND THE FIRST ONE");
     } else {
          console.log("Till not found");
     }
     try {
          getMainDetails() // solved bug 3 
     } catch (error) {
          console.log(error)
     }
     // console.log(mainButton);
     if (mainButton) {
          // const element: HTMLElement | null = mainButton.querySelector("header");
          // console.log(element)
          // if (element) {
          //      const hhh: HTMLElement | null = mainButton.querySelector(".truncate");
          //      // console.log(hhh)
          //      if (hhh) {
          //           const elementsWithAriaHiddenTrue: HTMLSpanElement | null = hhh.querySelector('[aria-hidden="true"]')
          //           console.log(elementsWithAriaHiddenTrue)
          //           if (elementsWithAriaHiddenTrue) {
          //                elementsWithAriaHiddenTrue.textContent = "Sohith's Links"
          //           }
          //      }
          // }

          getList(mainButton);


     }
     const intervalId = setInterval(getMainDetails, 5000);
     setTimeout(() => {
          clearInterval(intervalId);
     }, 10000);
     if (!options?.keepInDom) {
          script.onload = () => script.remove();
     }

     (document.head ?? document.documentElement).append(script);
}

async function waitForElement(selector: string, timeout: number = 2000): Promise<HTMLElement | null> {
     return new Promise((resolve) => {
          const timeoutId = setTimeout(() => {
               const element: HTMLElement | null = document.querySelector(selector);
               clearTimeout(timeoutId);
               resolve(element);
          }, timeout);
     });
}
