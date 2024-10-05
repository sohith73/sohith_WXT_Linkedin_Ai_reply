import React, { useState } from 'react';
import Modal from './Modal';
import AiIcon from './AiIcon';

const App: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const handleIconClick = () => {
          setIsModalOpen(true);
     };

     const closeModal = () => {
          setIsModalOpen(false);
     };

     return (
          <div>
               <AiIcon onClick={handleIconClick} />
               {isModalOpen && <Modal onClose={closeModal} />}
          </div>
     );
};

export default App;
