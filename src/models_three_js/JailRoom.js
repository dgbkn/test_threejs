import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, PerspectiveCamera, Html, Environment, PointerLockControls, RandomizedLight } from '@react-three/drei'
import { Suspense } from "react";
// import { AwesomeButton } from "react-awesome-button";
import Button from "../components/Button";
import { useState } from "react";
import { Loader } from "../components/Loader";
import ScrollingModal from "../components/ScrollingModal";
import { JailRoom } from "../models_blender/JailRoom";


export default function JailRoomModal() {

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas dpr={[1, 2]}>
            <Environment files="./pedestrian_overpass_1k.hdr"  background blur={0.5} far={300} preset="night" />

                <PerspectiveCamera makeDefault position={[0,0,0]} fov={60} zoom={0.8} />
                {/* <FirstPersonControls  movementSpeed={10} /> */}
                {/* <PointerLockControls /> */}
                <OrbitControls target={[-2, 2, 1.2]} maxDistance={0.1} enableZoom={true} zoomSpeed={10} maxZoom={500} />
                {/* <OrthographicCamera  makeDefault position={[0.1, 10, 4]} fov={60} zoom={20  } /> */}
                <ambientLight color={"yellow"} intensity={0.05} castShadow />
                {/* <hemisphereLight castShadow/>             */}
                {/* <pointLight color={"lightgreen"} intensity={0.4} position={[0.657, 0, 0]} /> */}
                {/* <pointLight color={"green"} intensity={0.3}  castShadow distance={10} position={[20.657, 200.553, 130.855]} /> */}

                {/* <directionalLight intensity={0.5} castShadow position={[0, 0, 0]} shadow-mapSize={[5024, 5024]} >
                    <orthographicCamera attach="shadow-camera" args={[50, 80, 10, 20]} />
                </directionalLight> */}

                {/* <RandomizedLight /> */}
                <Suspense fallback={<Loader />}>
                    <JailRoom />
                    {/* <Environment preset="sunset"> </Environment> */}

                </Suspense>

                <Stats />
            </Canvas>

            <ScrollingModal />

        </div>)
}
