import { ChakraProvider } from '@chakra-ui/react'
import WaitingRoomModel from "./models_three_js/WaitingRoom";
import JailRoomModal from './models_three_js/JailRoom';


function App() {
  return (
    <ChakraProvider>
    <div>
      <JailRoomModal />

    </div>
    </ChakraProvider>

  );
}

export default App;