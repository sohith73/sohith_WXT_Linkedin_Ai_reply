
export const overlay = (): HTMLDivElement => {
     const modalOverlay = document.createElement('div');
     modalOverlay.style.position = 'fixed';
     modalOverlay.style.top = '0';
     modalOverlay.style.left = '0';
     modalOverlay.style.width = '100%';
     modalOverlay.style.height = '100%';
     modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
     modalOverlay.style.zIndex = '10000';
     modalOverlay.style.display = 'flex';
     modalOverlay.style.justifyContent = 'center';
     modalOverlay.style.alignItems = 'center';
     return modalOverlay;
}

export const container = (): HTMLDivElement => {
     const modalContainer = document.createElement('div');
     modalContainer.style.backgroundColor = '#fff';
     modalContainer.style.padding = '20px';
     modalContainer.style.margin = '20px';
     modalContainer.style.borderRadius = '15px';
     modalContainer.style.width = '500px';
     modalContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
     return modalContainer;

}

export const msg_Container = (): HTMLDivElement => {
     const messageContainer = document.createElement('div');
     messageContainer.style.display = 'flex';
     messageContainer.style.flexDirection = 'column';
     messageContainer.style.marginBottom = '10px';
     return messageContainer;

}

export const input = (): HTMLInputElement => {
     const promptInput = document.createElement('input');
     promptInput.type = 'text';
     promptInput.placeholder = "Your prompt";
     promptInput.classList.add('user-input'); 
     promptInput.style.width = '100%';
     promptInput.style.padding = '18px';
     promptInput.style.marginTop = '18px';
     promptInput.style.marginBottom = '18px';
     promptInput.style.border = '1px solid rgba(0, 0, 0, 0.35)';
     promptInput.style.borderRadius = '10px';
     return promptInput;
}

export const output = (): HTMLDivElement => {
     const responseBox = document.createElement('div');
     responseBox.style.padding = '8px';
     responseBox.style.border = '1px solid #ccc';
     responseBox.style.borderRadius = '4px';
     responseBox.style.width = '70%';
     responseBox.style.backgroundColor = '#DBEAFE';
     responseBox.style.alignSelf = 'flex-start';
     responseBox.style.display = 'none';
     return responseBox;
}