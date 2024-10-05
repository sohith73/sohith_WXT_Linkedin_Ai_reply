import React, { useState } from 'react';
import downIMG from '../../../assets/Down.svg'
import sendIMG from '../../../assets/Send.svg'
import reGenerateIMG from '../../../assets/ReGen.svg'

interface ModalProps {
     onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
     const [generatedText, setGeneratedText] = useState('');
     const [generatedButtonText, setGeneratedButtonText] = useState('Generate');
     const [showOriginal, setOriginal] = useState('')
     const [show, setShow] = useState(false);
     const [message, setMessage] = useState('');
     const handleGenerate = () => {
          setGeneratedButtonText("Regenerate")
          setShow(true);
          setMessage("")
          setGeneratedText('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setMessage(e.target.value)
          if (!show) {
               setOriginal(e.target.value)
          }

     }
     const handleInsert = () => {
          const testToCopy = generatedText
          navigator.clipboard.writeText(testToCopy).then(() => {
               alert("Message copied successfully")
          })
               .catch(() => {
                    alert("Message failed to copy ")
               })

     }

     return (
          <div className="modal bg-[#F9FAFB] text-[#666d80] w-full h-[80%] p-28   overflow-hidden">
               <div className=' border border-black  p-3'>
                    {show &&
                         <div className="flex flex-col space-y-4">
                              <div className="flex justify-end">
                                   <div className="bg-[#DFE1E7] text-[#666D80] p-2 shadow-lg m-4 w-auto max-w-md overflow-hidden text-ellipsis whitespace-nowrap rounded-lg">
                                        <p>{showOriginal}</p>
                                   </div>
                              </div>
                              <div className="flex justify-start">
                                   <div className="bg-[#DBEAFE]  text-[#666D80] p-2 shadow-lg w-[300px] m-2 text-left rounded-lg">
                                        <p>{generatedText}</p>
                                   </div>
                              </div>
                         </div>
                    }
                    <input
                         type="text"
                         placeholder="Enter your command..."
                         className="p-2 mt-4 mb-4 border-2 border-solid border-black/35  w-[500px] bg-white rounded-lg focus:outline-none  focus:border-[3px]"
                         value={message} 
                         // onChange={(e) => setMessage(e.target.value)}
                         onChange={handleChange}
                    />
                    <div className='flex  flex-row justify-end gap-2 p-2 '>
                         {show && <div className="bg-[#F9FAFB] flex flex-row gap-1 hover:bg-[#f0f4f8] text-[#666D80] font-bold py-2 px-4 rounded border-2 border-black/35 hover:cursor-pointer" onClick={handleInsert}>
                              <span>
                                   <img src={downIMG} alt="down" width={10} className='pt-[3px]' />
                              </span>
                              Insert
                         </div>}
                         <div className='flex flex-row'>
                              <div className="bg-blue-500 flex flex-row gap-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" onClick={handleGenerate}>
                                   <span>{show ? <img src={reGenerateIMG} alt="op" width={10} className='pt-[3px]' ></img>
                                        : <img src={sendIMG} alt="op" width={15} className='pt-[3px]' />
                                   }</span>
                                   {generatedButtonText}
                              </div>
                         </div>
                         {show &&
                              <div className='flex flex-row'>
                                   <div onClick={onClose} className="bg-red-500 flex hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
                                        Close
                                   </div>
                              </ div >}
                    </div>
               </div>
          </div>
     );
};


export default Modal;
