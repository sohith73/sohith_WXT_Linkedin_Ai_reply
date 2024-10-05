import './App.css';
import Modal from './components/Modam';
import AiIcon from './components/AiIcon';

function App() {
  console.log("Hello sohith this is BSC")
  // useEffect(() => (alert("Hello sohith")), [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu ,setMenu] = useState(true);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-[#f9fafb]'>
      <AiIcon onClick={handleIconClick} showMenu={showMenu} setMenu={setMenu} />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
