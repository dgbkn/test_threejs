

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ControlRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/control_room-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Holo-Table" position={[-38.592, -10.746, -61.708]} scale={0.102}>
          <group name="Hologram" position={[0, 149.32, 0]} rotation={[-Math.PI / 2, 0.41, 0]} scale={52.304}>
            <mesh name="Hologram_Hologram_0" castShadow receiveShadow geometry={nodes.Hologram_Hologram_0.geometry} material={materials.Hologram} />
          </group>
        </group>
        <group name="MissionHolo1" position={[-1605.717, 184.234, 115.648]} scale={1.504} />
        <mesh name="Floor001" castShadow receiveShadow geometry={nodes.Floor001.geometry} material={materials.object_1} position={[-44.358, -11.381, 45.16]} rotation={[Math.PI / 2, 0, 0]} scale={1.179} />
        <mesh name="Computer" castShadow receiveShadow geometry={nodes.Computer.geometry} material={materials.object_3} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Desk" castShadow receiveShadow geometry={nodes.Desk.geometry} material={materials.object_0} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Screen" castShadow receiveShadow geometry={nodes.Screen.geometry} material={materials.object_2} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Wires" castShadow receiveShadow geometry={nodes.Wires.geometry} material={materials.PaletteMaterial002} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Table_Table_0" castShadow receiveShadow geometry={nodes.Table_Table_0.geometry} material={materials.Table} position={[-38.592, -5.069, -61.708]} rotation={[-Math.PI / 2, 0, 0]} scale={3.114} />
        <mesh name="Boite_Objet3_0" castShadow receiveShadow geometry={nodes.Boite_Objet3_0.geometry} material={materials.Objet3} position={[-131.312, -4.875, 41.92]} rotation={[-Math.PI, 0.004, -Math.PI]} scale={0.037} />
        <mesh name="Cendrier_Objet2_0" castShadow receiveShadow geometry={nodes.Cendrier_Objet2_0.geometry} material={materials.Objet2} position={[236.068, -11.045, 4.462]} scale={0.171} />
        <mesh name="Room_Room_Room1_0" castShadow receiveShadow geometry={nodes.Room_Room_Room1_0.geometry} material={materials.Room1} position={[240.989, -11.055, 5.09]} scale={0.175} />
        <mesh name="Neon12_Objet_0" castShadow receiveShadow geometry={nodes.Neon12_Objet_0.geometry} material={materials.Objet} position={[236.068, -11.045, 4.462]} scale={0.171} />
        <mesh name="CoffrePorteHaut_CoffreTexture_0" castShadow receiveShadow geometry={nodes.CoffrePorteHaut_CoffreTexture_0.geometry} material={materials.CoffreTexture} position={[0, 0, -0.116]} />
        <mesh name="Box01_Lether_0" castShadow receiveShadow geometry={nodes.Box01_Lether_0.geometry} material={materials.PaletteMaterial001} position={[11.516, 3.47, 25.768]} rotation={[-Math.PI / 2, 0, -2.255]} scale={0.337} />
        <mesh name="Box02_Chairback_0" castShadow receiveShadow geometry={nodes.Box02_Chairback_0.geometry} material={materials.Chairback} position={[30.76, 10.52, 15.859]} rotation={[-Math.PI / 2, 0, -2.255]} scale={0.337} />
      </group>
    </group>
  )
}

useGLTF.preload('/control_room-transformed.glb')
