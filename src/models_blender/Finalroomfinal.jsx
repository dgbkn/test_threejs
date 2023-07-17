

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function FinalRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/finalroomfinal-transformed.glb')
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log('animations', actions,animations);
    // animations[0].name = 0.0000000000000003;
        // actions["10-_wire_135006006Action.001"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="1-_wire_000000000" castShadow receiveShadow geometry={nodes['1-_wire_000000000'].geometry} material={materials.wire_000000000} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="10-_wire_135006006" castShadow receiveShadow geometry={nodes['10-_wire_135006006'].geometry} material={materials.wire_135006006} rotation={[Math.PI / 2, 0, 2.863]} />
        <mesh name="11-_wire_140088225" castShadow receiveShadow geometry={nodes['11-_wire_140088225'].geometry} material={materials.wire_140088225} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="12-_wire_143225087" castShadow receiveShadow geometry={nodes['12-_wire_143225087'].geometry} material={materials.wire_143225087} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="13-_wire_153228153" castShadow receiveShadow geometry={nodes['13-_wire_153228153'].geometry} material={materials.wire_153228153} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="14-_wire_213154229" castShadow receiveShadow geometry={nodes['14-_wire_213154229'].geometry} material={materials.wire_213154229} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="15-_wire_214228153" castShadow receiveShadow geometry={nodes['15-_wire_214228153'].geometry} material={materials.wire_214228153} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="16-_wire_214229166" castShadow receiveShadow geometry={nodes['16-_wire_214229166'].geometry} material={materials.wire_214229166} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="17-_wire_224086086" castShadow receiveShadow geometry={nodes['17-_wire_224086086'].geometry} material={materials.wire_224086086} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="2-_wire_008008136" castShadow receiveShadow geometry={nodes['2-_wire_008008136'].geometry} material={materials.wire_008008136} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="3-_wire_055069083" castShadow receiveShadow geometry={nodes['3-_wire_055069083'].geometry} material={materials.PaletteMaterial001} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="4-_wire_069083055" castShadow receiveShadow geometry={nodes['4-_wire_069083055'].geometry} material={materials.wire_069083055} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="6-_wire_112169128" castShadow receiveShadow geometry={nodes['6-_wire_112169128'].geometry} material={materials.wire_112169128} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="7-_wire_115115115" castShadow receiveShadow geometry={nodes['7-_wire_115115115'].geometry} material={materials.wire_115115115} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/finalroomfinal-transformed.glb')
