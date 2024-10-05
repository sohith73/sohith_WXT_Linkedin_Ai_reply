import React, { Dispatch } from 'react';

interface AiIconProps {
     onClick: () => void;
     showMenu: boolean;
     setMenu: (showMenu: boolean) => void;
}

const AiIcon: React.FC<AiIconProps> = ({ onClick, showMenu, setMenu }) => {
     const [content, setContent] = useState('Click to get started.');

     const handleClick = () => {
          setMenu(!showMenu);
          if (onClick) {
               onClick();
          }
     };

     return (
          <> {showMenu &&
               <div className="w-[100%] h-[100%] p-5 hover:cursor-pointer overflow-hidden" onClick={handleClick}>
                    {(
                         <div className="ai-icon text-3xl font-bold text-red-950">
                              {content}
                         </div>
                    )}
               </div>
          }
          </>
     );
};

export default AiIcon;
