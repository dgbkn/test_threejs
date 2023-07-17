

import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'

export function JailRoom(props) {
  const { nodes, materials } = useGLTF('/jailroom-transformed.glb')
  return (
    <group {...props} dispose={null}>
              <mesh castShadow receiveShadow position={[-0.430, 1.005, -1.007]} scale={0.43} >
          {/* <HtmlElement /> */}
      <Html occlude={'blending'} distanceFactor={0.6}   position={[-0.0, -0.015, 0.03]}  transform>
        <video  src='./sq_teaser.mp4' autoPlay muted loop></video>
      </Html>
          </mesh>
        

      <mesh onClick={() => {alert("Check COOKIE!")}} castShadow receiveShadow geometry={nodes['Hand-_Cuffs'].geometry} material={materials.PaletteMaterial001} position={[-1.055, 0.719, 2.481]} rotation={[-Math.PI / 2, 0, -1.985]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes['03_-_Volume_to_Mesh_-_HAS_MATERIAL'].geometry} material={materials.PaletteMaterial002} />
      <mesh castShadow receiveShadow geometry={nodes.WhatsApp_Image_2023_07_16_at_022553_w_trans.geometry} material={materials.WhatsApp_Image_2023_07_16_at_022553_w_trans} position={[-2.556, 1.135, 2.577]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1.262} />
      <mesh castShadow receiveShadow geometry={nodes.pCube89_lambert1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_Temp_Material_0.geometry} material={materials.Temp_Material} rotation={[-Math.PI / 2, 0, 0]} scale={[1.097, 1.097, 0.932]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001_Temp_Material002_0.geometry} material={materials['Temp_Material.002']} position={[-3.613, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.032, 1.445, 0.878]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_Bars_0.geometry} material={materials.Bars} position={[-1.12, 0.417, 0.484]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.Cube006_Temp_Material006_0.geometry} material={materials['Temp_Material.006']} position={[-1.131, 0.474, 0.458]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[1.032, 1, 1.032]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube008_Temp_Material007_0.geometry} material={materials['Temp_Material.007']} position={[-3.51, 0, 1.29]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.Cube009_cesso000_0.geometry} material={materials['cesso.000']} position={[-0.456, -0.24, 2.071]} rotation={[-1.569, 0, Math.PI]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.Cube012_Temp_Material001_0.geometry} material={materials['Temp_Material.001']} position={[-1.555, 0.58, 2.313]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.Cube013_Temp_Material003_0.geometry} material={materials['Temp_Material.003']} position={[-2.824, 0.962, 0.182]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.394, 0.311, 0.565]} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder004_Bars001_0.geometry} material={materials['Bars.001']} position={[-1.536, 0.869, 2.569]} rotation={[0, 0, -Math.PI / 2]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.LP_Temp_Material009_0.geometry} material={materials['Temp_Material.009']} position={[-1.362, 0.506, 0.459]} rotation={[-2.026, -0.909, -0.186]} scale={[0.851, 0.599, 0.599]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane_posters_0.geometry} material={materials.posters} position={[-1.408, 1.31, 0.003]} rotation={[0, 0, 0.115]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.Plane000_Temp_Material010_0.geometry} material={materials['Temp_Material.010']} position={[1.032, 0, 1.549]} rotation={[-Math.PI / 2, 0, 0]} scale={1.032} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Key_Key_0.geometry} material={materials.material} position={[0.049, 2.127, 1.4]} rotation={[-1.505, -0.26, 1.866]} scale={1.113} />
      <mesh castShadow receiveShadow geometry={nodes.SM_KeyTag_KeyTag_0.geometry} material={materials.KeyTag} position={[0.053, 2.127, 1.451]} rotation={[-1.661, -0.208, -1.984]} scale={1.113} />
      <mesh castShadow receiveShadow geometry={nodes.SM_Ring_Ring_0.geometry} material={materials.Ring} position={[0.049, 2.127, 1.424]} rotation={[-Math.PI / 2, 0.227, 0]} scale={1.113} />
    </group>
  )
}

useGLTF.preload('/jailroom-transformed.glb')
