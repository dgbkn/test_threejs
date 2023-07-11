import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, PerspectiveCamera, Html, Environment } from '@react-three/drei'
import { Suspense } from "react";
import { Underground_bunker } from "../models_blender/Underground_bunker";
// import { AwesomeButton } from "react-awesome-button";
import Button from "../components/Button";
import { useState } from "react";
import { Loader } from "../components/Loader";
import ScrollingModal from "../components/ScrollingModal";
import { useDisclosure } from "@chakra-ui/react";
import { WaitingRoom } from "../models_blender/WaitingRoom";


export default function Bunker() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    var [camera,setCamera] = useState([0.5,1,2]);

    var handleClick = (setCordinates) => {
        setCamera(setCordinates);
    }
    
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={camera} fov={60} zoom={0.9} />
                {/* <FirstPersonControls  movementSpeed={10} /> */}

                <OrbitControls target={[-0.061775, 0, 0]} enableZoom={false} />
                {/* <OrthographicCamera  makeDefault position={[0.1, 10, 4]} fov={60} zoom={20  } /> */}
                <ambientLight intensity={0.65} castShadow />
                <hemisphereLight castShadow/>
                <directionalLight  castShadow position={[40, 40, 150]} shadow-mapSize={[1024, 1024]}>
      <orthographicCamera attach="shadow-camera" args={[20, 50, 10, 20]} />
     </directionalLight>     
                {/* <spotLight intensity={0.4} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow/> */}
                <Suspense fallback={<Loader />}>
                    <Underground_bunker />
                        <Button  position={[50,50,200]} onClick={() => setCamera([0.8, 2, 1])} >Q1</Button>
                                    {/* <Environment preset="sunset"> </Environment> */}

                </Suspense>

                <Stats />
            </Canvas>
            
            <ScrollingModal />

        </div>)
}
