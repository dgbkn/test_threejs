
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TestingRoom(props) {
  const { nodes, materials } = useGLTF('/roomComp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Roof_Or_Floor.geometry} material={materials['Scene_-_Root']} position={[0.646, 25.901, 12.605]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.647, 14.292, 27.855]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.PaletteMaterial001} />
      <mesh castShadow receiveShadow geometry={nodes.ccs_logo.geometry} material={materials.ccs_logo} position={[6.894, 10.408, 37.412]} rotation={[1.622, 0, -3.141]} scale={4.411} />
      <mesh castShadow receiveShadow geometry={nodes.Object_13_1.geometry} material={materials.PaletteMaterial001} />
      <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.podloga} position={[0, 0, 12.42]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.113, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.sciana_okno} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['stolik.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials['Material.005']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials['Material.007']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.mata} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.stolik} position={[0, 0, 9.805]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.103, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_2001.geometry} material={materials['Material.001']} position={[0, 0, 11.957]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1.93, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.krzeslo_1} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.krzeslo_okno} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.krzeslo_prawe} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.krzeslo_srodek} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_Bottom_0.geometry} material={materials.Bottom} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_DOOR_0.geometry} material={materials.DOOR} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_emissive_0.geometry} material={materials.emissive} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_lock02_0.geometry} material={materials.lock02} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_LOCK1_0.geometry} material={materials.LOCK1} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_pillar_0.geometry} material={materials.pillar} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object008_TUBE_0.geometry} material={materials.TUBE} position={[-1.446, 3.111, 37.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.049, 0.041, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_4007.geometry} material={materials['Material.013']} position={[0, 0, 11.418]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1.99, 1]} />
      <mesh castShadow receiveShadow geometry={nodes['picture_obj_05_08_-_Default_0'].geometry} material={materials['08_-_Default']} position={[0.677, 23.568, 12.092]} rotation={[0, -Math.PI / 2, 0]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes['picture_obj_05_09_-_Default_0'].geometry} material={materials['09_-_Default']} position={[0.677, 23.568, 12.092]} rotation={[0, -Math.PI / 2, 0]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes['picture_obj_05_14_-_Default_0'].geometry} material={materials['14_-_Default']} position={[0.677, 23.568, 12.092]} rotation={[0, -Math.PI / 2, 0]} scale={0.004} />
      <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/roomComp-transformed.glb')
