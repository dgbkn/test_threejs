import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, FirstPersonControls, ArcballControls, MapControls, PerspectiveCamera, Environment, ContactShadows, useHelper, useProgress, Html } from "@react-three/drei";
import { Stats, OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from "react";
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { DirectionalLightHelper } from "three";
function Model(props) {
  const { scene } = useGLTF("/roomComp.glb");
  return <primitive object={scene} {...props} />

  // const fbx = useLoader(FBXLoader, '/room.fbx')
  // return <primitive object={fbx} />
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>
}

function App() {
  // const light2 = useRef();
  //  useHelper(light2, DirectionalLightHelper, "red");

  return (
<div style={{ width: "100vw", height: "100vh" }}>
    <Canvas dpr={[1,2]}>
      <PerspectiveCamera  makeDefault position={[0.1, 10, 4]} fov={60} zoom={0.8} />
      <OrbitControls target={[-0.061775 , 10, 0]}  enableZoom={false}/>
      <ambientLight intensity={1} castShadow /> 
      <hemisphereLight castShadow/>
      {/* <directionalLight  castShadow position={[40, 60, 150]} shadow-mapSize={[1024, 1024]}>
      <orthographicCamera attach="shadow-camera" args={[15, 50, 10, 20]} />
     </directionalLight>      */}
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense  fallback={<Loader />}>
        <Model />
        <Environment preset="night" />
      </Suspense>
      <Stats/>
    </Canvas>
    </div>
  );
}

export default App;