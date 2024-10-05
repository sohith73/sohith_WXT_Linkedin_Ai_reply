import React, { useState } from 'react';

interface ModalProps {
     onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
     const [generatedText, setGeneratedText] = useState('');

     const handleGenerate = () => {
          setGeneratedText('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
     };

     return (
          <div className="modal">
               <input
                    type="text"
                    placeholder="Enter your command..."
                    className="modal-input"
               />
               <button onClick={handleGenerate}>Generate</button>
               <p>{generatedText}</p>
               <button onClick={onClose}>Close333</button>
          </div>
     );
};

export default Modal;
