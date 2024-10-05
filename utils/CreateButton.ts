import frameIMG from "../assets/Frame.svg"
import downIMG from "../assets/Down.svg"
import sendIMG from "../assets/Send.svg"
import ReGenerate from "../assets/ReGen.svg"

export const preloadImages = () => {
     // if images are coming form CDN we can store them and increase the user experience
     const imageList = [
          "https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FVector%20(1).png?alt=media&token=b4742564-a9e5-417f-9b57-5276c016c34f",
          "https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FVector.png?alt=media&token=0b59777e-4204-4fcd-a4e5-21ce408a976b",
          "https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FVector.svg?alt=media&token=ae34ccff-d7cf-4cde-abaa-a04f565174d6"
     ];

     imageList.forEach((src) => {
          const img = new Image();
          img.src = src;
     });
}


export const insertButton = (): HTMLDivElement => {
     const generateButton = document.createElement('div');
     const image = document.createElement('img');
     // image.src = "https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FVector%20(1).png?alt=media&token=b4742564-a9e5-417f-9b57-5276c016c34f";
     image.src = downIMG;
     image.alt = "it will work";
     image.style.width = '15px';  
     image.style.height = '15px';
     image.style.marginRight = '5px';
     // Create the text span
     const textSpan = document.createElement('span');
     textSpan.textContent = 'Insert';
     
     generateButton.style.display = 'flex';  // Flexbox layout
     generateButton.style.alignItems = 'center';  // Vertically center the items
     generateButton.appendChild(image);  // Append the image first
     generateButton.appendChild(textSpan);  // Append the text span next
     generateButton.classList.add('modal-button');
     generateButton.style.padding = '8px 12px';
     generateButton.style.backgroundColor = '#F9FAFB';
     generateButton.style.color = '#666D80';
     generateButton.style.border = '2px solid #666D80';
     generateButton.style.borderRadius = '4px';
     generateButton.style.cursor = 'pointer';
     generateButton.style.marginRight = 'auto';
     generateButton.style.marginLeft = '50%';
     generateButton.style.visibility = 'hidden';
     return generateButton;
}

export const generateButton = (): HTMLDivElement => {
     const generateButton = document.createElement('div');
     const image1 = document.createElement('img');
     // image1.src = "https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FVector.svg?alt=media&token=ae34ccff-d7cf-4cde-abaa-a04f565174d6"
     image1.src = sendIMG;
     image1.alt = "it will work"
     image1.style.width = '15px';  // Make it 20px wide, or adjust as needed
     image1.style.height = '15px'
     image1.style.marginLeft = '5px'
     image1.style.marginTop = '6px'
     generateButton.textContent = 'Generate';
     generateButton.style.display = 'flex';
     generateButton.appendChild(image1);
     generateButton.classList.add('modal-button');
     generateButton.style.padding = '8px 12px';
     generateButton.style.backgroundColor = '#3B82F6';
     generateButton.style.color = '#ffffff';
     generateButton.style.border = 'none';
     generateButton.style.borderRadius = '4px';
     generateButton.style.cursor = 'pointer';
     generateButton.style.marginRight = 'auto';
     generateButton.style.marginLeft = '5%';
     return generateButton;
}


export const i_Container = (): HTMLDivElement => {
     const iconContainer = document.createElement('div');
     iconContainer.style.position = 'fixed';
     iconContainer.style.bottom = '80px';
     iconContainer.style.right = '48px';
     iconContainer.style.width = '30px';
     iconContainer.style.height = '30px';
     iconContainer.style.cursor = 'pointer';
     iconContainer.style.zIndex = '9999';
     return iconContainer;
}

export const logoImg = (): HTMLImageElement => {
     const svgIcon = document.createElement('img');
     // svgIcon.src = 'https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FFrame.svg?alt=media&token=cc1626d8-30a3-41e5-9756-94e361f4d6b3';
     svgIcon.src = frameIMG;
     svgIcon.alt = 'AI Icon';
     svgIcon.style.width = '100%';
     svgIcon.style.height = '100%';
     return svgIcon;
}