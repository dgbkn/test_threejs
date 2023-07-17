import { ChakraProvider } from '@chakra-ui/react'
import FinalRoomModal from './models_three_js/FinalRoom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectModal from './SelectModal'
import WaitingRoomModel from './models_three_js/WaitingRoom'
import BunkerModal from './models_three_js/Bunker'
import ControlRoomModel from './models_three_js/ControlRoom'
import TestingRoomModal from './models_three_js/TestingRoom';
import JailRoomModal from './models_three_js/JailRoom';


function App() {
  return (
    
    <div>

      <BrowserRouter>
      <Routes>
            <Route path="/" element={<SelectModal />} />
            <Route path="/testing" element={<TestingRoomModal />} />
            <Route path="/waitingroom" element={<WaitingRoomModel />} />
            <Route path="/bunker" element={<BunkerModal />} />
            <Route path="/controlroom" element={<ControlRoomModel />} />
            <Route path="/jailroom" element={<JailRoomModal />} />
            <Route path="/finalroom" element={<FinalRoomModal />} />


        </Routes>
        </BrowserRouter>

    </div>

  );
}

export default App;