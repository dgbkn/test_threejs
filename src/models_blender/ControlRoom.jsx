
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Bloom } from '@react-three/postprocessing'

export function ControlRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/controlRoom-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions);
    actions["Hologram|HologramAction.002"].play();
    actions["note|note|note|noteAction|note|noteAction"].play();
    // actions["Take 001"].play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Scene">
      <group name="MissionHolo1" position={[-1605.717, 184.234, 115.648]} scale={1.504} />
      <group name="Holo-Table" position={[-69.434, -10.329, 37.245]} scale={0.114}>
        <group name="Hologram" position={[0, 149.32, 0]} rotation={[-Math.PI / 2, 0.41, 0]} scale={52.304}>
          <mesh name="Hologram_Hologram_0" castShadow receiveShadow geometry={nodes.Hologram_Hologram_0.geometry} material={materials['Hologram.001']} position={[-0.91, 0.766, 1.711]} scale={3.106} />
        </group>
      </group>
      <group name="note" position={[-25.535, -16.148, -1.11]} scale={0.35}>
        <mesh name="0" castShadow receiveShadow geometry={nodes['0'].geometry} material={materials.stuff2} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
      </group>
      <mesh name="Ecran1_Objet2_0" castShadow receiveShadow geometry={nodes.Ecran1_Objet2_0.geometry} material={materials.Objet2} position={[2052.446, 377.388, -5623.456]} scale={[1.835, 1.888, 1.888]} />
      <mesh name="TV_Screen" castShadow receiveShadow geometry={nodes.TV_Screen.geometry} material={materials.material} position={[-7.995, 67.455, 89.49]} rotation={[-Math.PI, 0.079, -Math.PI]} scale={1.043} />
      <mesh name="Floor002" castShadow receiveShadow geometry={nodes.Floor002.geometry} material={materials.object_1} position={[134.106, 31.032, -27.605]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-2.162, -5.28, -1.088]} />
      <group name="Moniter" position={[118.646, -8.769, -113.38]} rotation={[Math.PI, -0.927, Math.PI]} scale={19.293}>
        <mesh name="Cube002" castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.PaletteMaterial003} />
        <mesh name="Cube002_1" castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.desktop} />
        <mesh name="Cube002_2" castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials.PaletteMaterial001} />
      </group>
      <mesh name="Computer" castShadow receiveShadow geometry={nodes.Computer.geometry} material={materials.object_3} position={[116.377, -11.264, -15.38]} rotation={[Math.PI / 2, 0, 1.565]} scale={2.665} />
      <mesh name="Desk" castShadow receiveShadow geometry={nodes.Desk.geometry} material={materials.object_0} position={[116.377, -11.264, -15.38]} rotation={[Math.PI / 2, 0, 1.565]} scale={2.665} />
      <mesh name="Screen" castShadow receiveShadow geometry={nodes.Screen.geometry} material={materials.object_2} position={[116.377, -11.264, -15.38]} rotation={[Math.PI / 2, 0, 1.565]} scale={2.665} />
      <mesh name="Wires" castShadow receiveShadow geometry={nodes.Wires.geometry} material={materials.PaletteMaterial004} position={[116.377, -11.264, -15.38]} rotation={[Math.PI / 2, 0, 1.565]} scale={2.665} />
      <mesh name="Plane001" castShadow receiveShadow geometry={nodes.Plane001.geometry} material={materials['Wood.001']} position={[3.124, 93.213, -17.14]} scale={[136.061, 86.959, 118.165]} />
      <mesh name="Box02_Chairback_0" castShadow receiveShadow geometry={nodes.Box02_Chairback_0.geometry} material={materials.Chairback} position={[79.966, 18.515, -60.363]} rotation={[-Math.PI / 2, 0, -0.745]} scale={0.435} />
      <mesh name="room_glass_aqua_0" castShadow receiveShadow geometry={nodes.room_glass_aqua_0.geometry} material={materials.PaletteMaterial002} position={[-25.535, -16.148, -1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.35, 0.465, 0.35]} />
      <mesh name="room_room_0" castShadow receiveShadow geometry={nodes.room_room_0.geometry} material={materials['Marble dark']} position={[-25.535, -16.148, -1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.35, 0.434, 0.35]} />
      <mesh name="room_stuff2_0" castShadow receiveShadow geometry={nodes.room_stuff2_0.geometry} material={materials.stuff2} position={[-25.535, -16.148, -1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.35, 0.449, 0.35]} />
      <mesh name="room_stuff_0" castShadow receiveShadow geometry={nodes.room_stuff_0.geometry} material={materials.stuff} position={[-25.535, -16.148, -1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.35, 0.465, 0.35]} />
      <mesh name="room_view_0" castShadow receiveShadow geometry={nodes.room_view_0.geometry} material={materials.view} position={[-25.535, -28.277, -1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.352, 0.449, 0.411]} />
      <mesh name="Table_Table_0" castShadow receiveShadow geometry={nodes.Table_Table_0.geometry} material={materials['Table.001']} position={[-69.434, -4.02, 37.245]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.719, 7.07, 5.266]} />
    </group>
  </group>
  )
}

useGLTF.preload('/controlRoom-transformed.glb')
