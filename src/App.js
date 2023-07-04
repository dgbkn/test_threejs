import { ChakraProvider } from '@chakra-ui/react'
import WaitingRoomModel from "./models_three_js/WaitingRoom";


function App() {
  return (
    <ChakraProvider>
    <div>
      <WaitingRoomModel />

    </div>
    </ChakraProvider>

  );
}

export default App;