import ReGenerate from "../assets/ReGen.svg"
import { generateButton, insertButton, preloadImages, logoImg, i_Container } from './CreateButton'
import {overlay,container,msg_Container,input,output} from './modal'

export const waitForElement = (selector: string, interval: number = 500, timeout: number = 5000): Promise<HTMLElement | null> => {
     return new Promise((resolve, reject) => {
          const startTime = Date.now();

          const checkElement = setInterval(() => {
               const element = document.querySelector<HTMLElement>(selector);
               if (element) {
                    clearInterval(checkElement);
                    resolve(element);
               } else if (Date.now() - startTime > timeout) {
                    clearInterval(checkElement);
                    reject(new Error(`Element ${selector} not found within timeout`));
               }
          }, interval);
     });
};




export const getList = async (selector: HTMLElement | null) => {
     const contacts: HTMLElement | null | undefined = selector?.querySelector(".scrollable");

     if (contacts) {
          console.log(contacts);

          contacts.addEventListener('click', (event) => {
               console.log("Clicked on " + event.target);
               getMainDetails();
          });
     }
}

export const getMainDetails = async () => {
     const divElement: HTMLElement | null = document.querySelector('.msg-convo-wrapper');
     if (divElement) {
          // console.log("Access EAP");
          console.log(divElement);
          const formsOp: HTMLElement | null = divElement.querySelector('.msg-form');
          if (formsOp) {
               console.log(formsOp);
               const mainDIV: HTMLElement | null = formsOp.querySelector('.msg-form__msg-content-container--scrollable');
               if (mainDIV) {
                    console.log(mainDIV);
                    const iconContainer : HTMLDivElement = i_Container();

                    const svgIcon: HTMLImageElement = logoImg();
                    iconContainer.appendChild(svgIcon);

                    iconContainer.addEventListener('click', () => {
                         console.log('Div containing image clicked!');
                         const modalOverlay = overlay();

                         const modalContainer = container();

                         const messageContainer = msg_Container()

                         const promptInput = input();

                         const responseBox = output();

                         const buttonContainer = document.createElement('div');
                         buttonContainer.style.display = 'flex';

                         const insertButtonMain: HTMLDivElement = insertButton();
                         const generateButton1: HTMLDivElement = generateButton();

                         modalContainer.appendChild(messageContainer);
                         modalContainer.appendChild(responseBox);
                         modalContainer.appendChild(promptInput);
                         buttonContainer.appendChild(insertButtonMain);
                         buttonContainer.appendChild(generateButton1);
                         modalContainer.appendChild(buttonContainer);

                         modalOverlay.appendChild(modalContainer);
                         document.body.appendChild(modalOverlay);
                         const dummyResponses = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
                         modalOverlay.addEventListener('click', (e) => {
                              if (e.target === modalOverlay) {
                                   document.body.removeChild(modalOverlay);
                              }
                         });
                         insertButtonMain.addEventListener('click', (e) => {
                              pasteMessage(dummyResponses, mainDIV);
                              document.body.removeChild(modalOverlay);
                         });

                         generateButton1.addEventListener('click', () => {
                              generateButton1.textContent = "Regenerate";
                              const userInput = promptInput.value.trim();
                              if (userInput) {
                                   responseBox.style.display = 'flex';
                                   insertButtonMain.style.marginLeft = '49%';
                                   const image1 = document.createElement('img');
                                   image1.src = ReGenerate;
                                   image1.alt = "it will work";
                                   image1.style.width = '15px';  // Make it 20px if need or leave it for now 
                                   image1.style.height = '15px';
                                   image1.style.marginLeft = '5px';
                                   image1.style.marginTop = '6px';
                                   const textSpan = document.createElement('span');
                                   textSpan.textContent = 'Generate';
                                   generateButton1.appendChild(image1);
                                   insertButtonMain.style.visibility = 'visible';
                                   const userMessage = document.createElement('div');
                                   userMessage.textContent = userInput;
                                   userMessage.style.backgroundColor = '#DFE1E7';
                                   userMessage.style.padding = '10px';
                                   userMessage.style.maxWidth = '70%';
                                   userMessage.style.color = '#666D80';
                                   userMessage.style.borderRadius = '10px';
                                   userMessage.style.alignSelf = 'flex-end';
                                   messageContainer.appendChild(userMessage);

                                   const randomResponse = dummyResponses;
                                   responseBox.textContent = randomResponse;
                                   responseBox.style.display = 'flex';
                                   responseBox.style.color = '#666D80';
                                   responseBox.style.alignSelf = 'flex-start';

                                   promptInput.value = '';
                              } else {
                                   alert('Please enter a message in the prompt.');
                              }
                         });

                         console.log('Div containing image click completed');
                    });
                    mainDIV.appendChild(iconContainer);
                    console.log("svgIcon added");
               }
               else {
                    // console.log("err id = 12");
               }
          }
          else {
               console.log("Main error in it form id 10");
          }
     } else {
          console.error('Div element not found. id 8 ');
     }
};

const pasteMessage = (message: string, selector: HTMLElement | null) => {
     message = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

     const target = selector?.querySelector('p') as HTMLParagraphElement | null;
     const textboxElement = document?.querySelector('[role="textbox"]');
     const targetDiv = selector?.querySelector('div[aria-hidden="true"]');

     if (targetDiv) {
          // console.log(targetDiv); solved bug 4
          targetDiv.setAttribute('class', 't-14 t-black--light t-normal');
          (targetDiv as HTMLElement).style.setProperty('content', 'none', 'before');
          // console.log("No error 19");
     } else {
          // console.log("error code 19");
     }

     if (textboxElement) {  //solved bug 4
          textboxElement.setAttribute('data-artdeco-is-focused', 'true');
          // console.log(" change input box done");
          console.log(textboxElement);
     } else {
          console.log("error id 15");
     }

     if (target) {
          target.style.zIndex = '999';
          target.innerText = message;
          const sendButton = document.querySelector('.msg-form__send-button') as HTMLButtonElement;
          if (sendButton) {
               sendButton.removeAttribute('disabled');
          }
     } else {
          console.error('Target paragraph element not found.');
     }
};

