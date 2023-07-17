
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { HtmlElement } from './HtmlElement';
import { useFrame, useThree } from '@react-three/fiber';
import { Slider } from '@chakra-ui/react';



export function WaitingRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/WaitingRoom-transformed.glb')
  const { actions } = useAnimations(animations, group);

//   useFrame(({ camera }) => {

//     camera.position.x += 0.01;
//     camera.position.y += 0.01;
// });


  useEffect(() => {
    console.log(actions);
    actions.Scene.play();
    // actions["Take 001"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Grandma's_TV" position={[1.185, 0.045, 1.75]} scale={0.003}>
          <group name="TV_screenchannel1" position={[-23.657, 345.553, -68.084]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screenchannel1_Tv_0" castShadow receiveShadow geometry={nodes.TV_screenchannel1_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_screenchannel2" position={[-23.657, 345.553, -64.752]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screenchannel2_Tv_0" castShadow receiveShadow geometry={nodes.TV_screenchannel2_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_screennoise_1" position={[-23.657, 345.553, -71.591]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screennoise_1_Tv_0" castShadow receiveShadow geometry={nodes.TV_screennoise_1_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_screennoise_2" position={[-23.657, 345.553, -70.688]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screennoise_2_Tv_0" castShadow receiveShadow geometry={nodes.TV_screennoise_2_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_screennoise_3" position={[-23.657, 345.553, -68.995]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screennoise_3_Tv_0" castShadow receiveShadow geometry={nodes.TV_screennoise_3_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_screennosignal" position={[-23.657, 345.553, -68.855]} rotation={[-Math.PI / 2, 0, 0]} scale={[100.672, 100.672, 95.392]}>
            <mesh name="TV_screennosignal_Tv_0" castShadow receiveShadow geometry={nodes.TV_screennosignal_Tv_0.geometry} material={materials['material.001']} />
          </group>
          <group name="TV_standby" position={[29.673, 272.461, -77.34]} rotation={[-Math.PI / 2, 0.021, 0]} scale={118.507}>
            <mesh name="TV_standby_Tv_0" castShadow receiveShadow geometry={nodes.TV_standby_Tv_0.geometry} material={materials['material.001']} />
          </group>
        </group>
        <mesh name="SkyBox_Sci-Fi_Space_Room_Interior" castShadow receiveShadow geometry={nodes['SkyBox_Sci-Fi_Space_Room_Interior'].geometry} material={materials['Scene_-_Root']} position={[0.005, -49.571, 0.546]} rotation={[-Math.PI / 2, 0, 0]} scale={[475.06, 475.06, 482.134]} />
        <mesh name="Object_10" castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root.001']} position={[-0.152, 1.839, 2.095]} rotation={[1.676, -0.002, Math.PI]} scale={0.279} />
        <mesh name="Simple_Pen" castShadow receiveShadow geometry={nodes.Simple_Pen.geometry} material={materials.None} position={[-1.18, 0.021, -0.764]} rotation={[0.054, 0.884, -1.612]} scale={0.014} />
        <mesh name="Spoon001" castShadow receiveShadow geometry={nodes.Spoon001.geometry} material={materials.PaletteMaterial001} position={[0.028, 0.782, -1.044]} rotation={[-3.089, -0.05, 3.085]} scale={0.001} />
        <mesh name="Roof_1" castShadow receiveShadow geometry={nodes.Roof_1.geometry} material={materials['Scene_-_Root.004']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="Notepad_Texture" castShadow receiveShadow geometry={nodes.Notepad_Texture.geometry} material={materials['Notepad Texture']} position={[-0.17, 0.782, -0.758]} rotation={[0, -0.127, 0]} scale={0.259} />
       

        <Html occlude distanceFactor={0.8}    transform>
      </Html>
        <mesh name="ccs_logo001"  material-color={"black"}  position={[1.726, 2.184, -1.31]} rotation={[Math.PI / 2, 0, 0]} scale={0.414} castShadow receiveShadow material={materials.ccs_logoSuper} geometry={nodes.ccs_logo001.geometry}  />
      
        <mesh name="O9H8JH0" castShadow receiveShadow geometry={nodes.O9H8JH0.geometry} material={materials.O9H8JH0} position={[0.437, 2.553, 0.208]} scale={[4.88, 1.4, 4.239]} />
        <mesh name="WhatsApp_Image_2023-07-05_at_233215"  castShadow receiveShadow geometry={nodes['WhatsApp_Image_2023-07-05_at_233215'].geometry} material={materials['WhatsApp Image 2023-07-05 at 23.32.15']} position={[1.069, 1.44, -1.396]} rotation={[1.554, -0.054, -0.001]} scale={0.757} />
        <mesh name="Raptus_Hexx" castShadow receiveShadow geometry={nodes.Raptus_Hexx.geometry} material={materials['Raptus Hexx']} />
        <mesh name="Cart001_Cart_Cover_0" castShadow receiveShadow geometry={nodes.Cart001_Cart_Cover_0.geometry} material={materials.Cart_Cover} position={[-0.59, 0.824, -0.983]} rotation={[0, Math.PI / 6, 0]} scale={1.031} />
        <mesh  name="Cover_����������_0" castShadow receiveShadow geometry={nodes['Cover_����������_0'].geometry} material={materials.material} position={[0.119, 0.005, 0.155]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.443, 1.473, 1.031]} />
        <mesh  material-toneMapped={false}  name="Cube_Wood_Dark_0" castShadow receiveShadow geometry={nodes.Cube_Wood_Dark_0.geometry} material={materials.material_0} position={[2.238, 0.309, 1.508]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Cube003_Red_Cloth_0" castShadow receiveShadow geometry={nodes.Cube003_Red_Cloth_0.geometry} material={materials.Red_Cloth} position={[2.138, 0.412, -0.412]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Cube005_Light_Wood_0" castShadow receiveShadow geometry={nodes.Cube005_Light_Wood_0.geometry} material={materials.Light_Wood} position={[1.942, 0.206, -0.412]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
       
       
        {/* <mesh name="Plane_TV_Scren_0" material-color={"black"} castShadow receiveShadow geometry={nodes.Plane_TV_Scren_0.geometry} material={materials.TV_Scren} position={[-0.446, 0.996, -1.007]} rotation={[-Math.PI / 2, 0, -0.069]} scale={1.373} /> */}
        <mesh castShadow receiveShadow position={[-0.430, 1.005, -1.007]} scale={0.43} >
          {/* <HtmlElement /> */}
      <Html occlude={'blending'} distanceFactor={0.6}   position={[-0.0, -0.015, 0.03]}  transform>
        <video  src='./sq_teaser.mp4' autoPlay loop></video>
      </Html>
          </mesh>
        
        
        <mesh   name="Cube027_TMNT_0" castShadow receiveShadow geometry={nodes.Cube027_TMNT_0.geometry} material={materials.TMNT} position={[1.532, 0.425, -0.388]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} scale={1.031} />
        <mesh  name="Cube035_Velikiy_D_0" castShadow receiveShadow geometry={nodes.Cube035_Velikiy_D_0.geometry} material={materials.Velikiy_D} position={[-0.172, 0.773, -0.763]} rotation={[-Math.PI / 2, 0, -0.133]} scale={[1.136, 0.879, 1.031]} />
        <mesh  name="Cube047_Boxes_0001" castShadow receiveShadow geometry={nodes.Cube047_Boxes_0001.geometry} material={materials.Boxes} position={[-1.207, 1.952, 1.845]} rotation={[-Math.PI / 2, 0, 2.094]} scale={[0.859, 0.67, 0.344]} />
        <mesh name="Plane008_Owner_0" castShadow receiveShadow geometry={nodes.Plane008_Owner_0.geometry} material={materials.Owner} position={[2.397, 0.941, 1.192]} rotation={[-1.324, 0.089, -2.804]} scale={1.031} />
        <mesh name="Room_Brick_0" castShadow receiveShadow geometry={nodes.Room_Brick_0.geometry} material={materials.Brick} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Room_Floor_0" castShadow receiveShadow geometry={nodes.Room_Floor_0.geometry} material={materials.Floor} position={[0.519, 0.007, 0.262]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.349, 1.607, 1.031]} />
        <mesh name="Room_Wall_0" castShadow receiveShadow geometry={nodes.Room_Wall_0.geometry} material={materials.WallPapper} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="RemoteControl_Tv_0" castShadow receiveShadow geometry={nodes.RemoteControl_Tv_0.geometry} material={materials['material.001']} position={[1.545, 0.739, 1.542]} rotation={[-Math.PI / 2, 0, 0.456]} scale={0.274} />
        <mesh name="shadows_TV_Shadows_0" castShadow receiveShadow geometry={nodes.shadows_TV_Shadows_0.geometry} material={materials.PaletteMaterial002} position={[1.097, 0.729, 1.75]} rotation={[-Math.PI / 2, 0, -0.117]} scale={[0.309, 0.309, 0.274]} />
        <mesh name="TV_glass_TV_Glass_0" castShadow receiveShadow geometry={nodes.TV_glass_TV_Glass_0.geometry} material={materials.TV_Glass} position={[1.122, 0.987, 1.539]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.267, 0.272, 0.251]} />
        <mesh name="Object_2" castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.material_2_1} position={[-0.991, 1.079, 0.778]} rotation={[0.29, 1.379, -0.258]} scale={[-0.002, 0.002, 0.002]} />
        <mesh name="Object_3" castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.material_1_0} position={[-0.991, 1.079, 0.778]} rotation={[0.29, 1.379, -0.258]} scale={[-0.002, 0.002, 0.002]} />
        <mesh name="Body_TVRemote_0" castShadow receiveShadow geometry={nodes.Body_TVRemote_0.geometry} material={materials.TVRemote} position={[1.585, 0.722, 1.575]} rotation={[-1.538, -0.047, -0.453]} scale={0.024} />
        <mesh name="Box001_Material_#26_0" castShadow receiveShadow geometry={nodes['Box001_Material_#26_0'].geometry} material={materials.PaletteMaterial001} position={[0.81, 1.119, 1.617]} rotation={[-3.121, -0.144, 2.957]} scale={0.002} />
      </group>
    </group>
  )
}

useGLTF.preload('/WaitingRoom-transformed.glb')
