import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, PerspectiveCamera, Html, Environment, PointerLockControls, RandomizedLight } from '@react-three/drei'
import { Suspense } from "react";
// import { AwesomeButton } from "react-awesome-button";
import Button from "../components/Button";
import { useState } from "react";
import { Loader } from "../components/Loader";
import ScrollingModal from "../components/ScrollingModal";
import { WaitingRoom } from "../models_blender/WaitingRoom";
import { ControlRoom } from "../models_blender/ControlRoom";


export default function WaitingRoomModel() {

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas dpr={[1, 2]}>
            {/* <Environment files="./pedestrian_overpass_1k.hdr" background blur={0.5} /> */}

                <PerspectiveCamera makeDefault position={[0, 2, 0]} fov={60} zoom={0.8} />
                {/* <FirstPersonControls  movementSpeed={10} /> */}
                {/* <PointerLockControls /> */}
                <OrbitControls target={[30, 40, -20]} maxDistance={0.1} enableZoom={true} zoomSpeed={10} maxZoom={500} />
                {/* <OrthographicCamera  makeDefault position={[0.1, 10, 4]} fov={60} zoom={20  } /> */}
                <ambientLight color={"green"} intensity={0.8} castShadow />
                {/* <hemisphereLight castShadow/> */}
            
                <pointLight color={"green"} intensity={0.3} position={[-23.657, 345.553, -68.855]} />

                <directionalLight intensity={0.5} castShadow position={[600, 300, 200]} shadow-mapSize={[5024, 5024]} >
                    <orthographicCamera attach="shadow-camera" args={[15, 40, 10, 20]} />
                </directionalLight>

                {/* <RandomizedLight /> */}
                <Suspense fallback={<Loader />}>
                    <ControlRoom />
                    {/* <Environment preset="sunset"> </Environment> */}

                </Suspense>

                <Stats />
            </Canvas>

            <ScrollingModal />

        </div>)
}
