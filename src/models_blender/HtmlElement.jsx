
import { Slider } from '@chakra-ui/react';
import { Html } from '@react-three/drei';
import {  useThree } from '@react-three/fiber';
import React, {  useState } from 'react';



export function HtmlElement() {
  const [size, set] = useState(0.5)
  const controls = useThree((state) => state.controls)
  return (
    <mesh scale={size * 2}>
      {/* <boxGeometry /> */}
      {/* <meshStandardMaterial /> */}
      <Html occlude distanceFactor={0.8} position={[0, 0, 0.51]} transform>
        {/* <span>Size</span>
        <Slider
          style={{ width: 100 }}
          min={0.5}
          max={1}
          step={0.01}
          value={size}
          onChange={(value) => ((controls.enabled = false), set(value))}
          onAfterChange={() => (controls.enabled = true)}
        /> */}

        <video src='./finalteaser.mp4' autoPlay muted loop></video>
      </Html>
    </mesh>
  )
}
  
