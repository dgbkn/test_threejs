

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'




export function WaitingRoom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/WaitingRoom-transformed.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    //play animation from actions variable react three js
    // mixer.start();
    // mixer.stopAllAction();
    // mixer.stop();
    // mixer.clipAction(actions.Animation).play();
  
    //  console.log(mixer);
  
    // actions.HatchOpening.play();
  
    actions.Scene.play();
    actions["Take 001"].play();
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
        <group name="rotating-cylinder-spline" position={[0.181, 11.806, 0.42]} rotation={[-1.552, -0.02, -1.074]} scale={0.015}>
          <group name="Dummy001" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder001" position={[0, -0.004, -15.427]}>
                <mesh name="Cylinder001_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder001_cylinder_0.geometry} material={materials.cylinder} position={[0, 0.012, 0]} />
              </group>
              <group name="Box001" position={[0, -0.004, -15.427]}>
                <mesh name="Box001_cube-transp_0" castShadow receiveShadow geometry={nodes['Box001_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, 0.011, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline001" position={[-0.18, 11.798, 0.457]} rotation={[-1.552, -0.02, -1.86]} scale={0.015}>
          <group name="Dummy002" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder001" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder002" position={[0, 0.004, -15.427]}>
                <mesh name="Cylinder002_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder002_cylinder_0.geometry} material={materials.cylinder} position={[0, -0.011, 0]} />
              </group>
              <group name="Box002" position={[0, 0.004, -15.427]}>
                <mesh name="Box002_cube-transp_0" castShadow receiveShadow geometry={nodes['Box002_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, 0.004, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline002" position={[-0.463, 11.797, 0.228]} rotation={[-1.552, -0.02, -2.645]} scale={0.015}>
          <group name="Dummy003" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder002" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder003" position={[0, -0.005, -15.427]}>
                <mesh name="Cylinder003_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder003_cylinder_0.geometry} material={materials.cylinder} position={[0, 0.004, 0]} />
              </group>
              <group name="Box003" position={[0, -0.005, -15.427]}>
                <mesh name="Box003_cube-transp_0" castShadow receiveShadow geometry={nodes['Box003_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, -0.005, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline003" position={[-0.5, 11.803, -0.133]} rotation={[-1.552, -0.02, 2.853]} scale={0.015}>
          <group name="Dummy004" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder003" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder004" position={[0, -0.002, -15.427]}>
                <mesh name="Cylinder004_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder004_cylinder_0.geometry} material={materials.cylinder} position={[0, -0.002, 0]} />
              </group>
              <group name="Box004" position={[0, -0.002, -15.427]}>
                <mesh name="Box004_cube-transp_0" castShadow receiveShadow geometry={nodes['Box004_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, -0.01, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline004" position={[-0.271, 11.813, -0.416]} rotation={[-1.552, -0.02, 2.067]} scale={0.015}>
          <group name="Dummy005" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder004" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder005" position={[0, 0.011, -15.427]}>
                <mesh name="Cylinder005_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder005_cylinder_0.geometry} material={materials.cylinder} position={[0, -0.012, 0]} />
              </group>
              <group name="Box005" position={[0, 0.011, -15.427]}>
                <mesh name="Box005_cube-transp_0" castShadow receiveShadow geometry={nodes['Box005_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, 0.003, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline005" position={[0.09, 11.821, -0.453]} rotation={[-1.552, -0.02, 1.282]} scale={0.015}>
          <group name="Dummy006" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder005" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder006" position={[0, -0.004, -15.427]}>
                <mesh name="Cylinder006_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder006_cylinder_0.geometry} material={materials.cylinder} position={[0, -0.003, 0]} />
              </group>
              <group name="Box006" position={[0, -0.004, -15.427]}>
                <mesh name="Box006_cube-transp_0" castShadow receiveShadow geometry={nodes['Box006_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, -0.004, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline006" position={[0.373, 11.822, -0.224]} rotation={[-1.552, -0.02, 0.497]} scale={0.015}>
          <group name="Dummy007" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder006" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder007" position={[0, 0.016, -15.427]}>
                <mesh name="Cylinder007_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder007_cylinder_0.geometry} material={materials.cylinder} position={[0, 0.009, 0]} />
              </group>
              <group name="Box007" position={[0, 0.016, -15.427]}>
                <mesh name="Box007_cube-transp_0" castShadow receiveShadow geometry={nodes['Box007_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, 0.008, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="rotating-cylinder-spline007" position={[0.41, 11.816, 0.138]} rotation={[-1.552, -0.02, -0.289]} scale={0.015}>
          <group name="Dummy008" position={[12.483, -0.186, 0]} rotation={[0, 0, -1.626]}>
            <group name="flat-cylinder007" position={[-0.186, -0.01, 0.542]} rotation={[Math.PI / 2, -1.515, -Math.PI]} scale={[1.598, 0.007, 2.411]}>
              <group name="Cylinder008" position={[0, 0, -15.427]}>
                <mesh name="Cylinder008_cylinder_0" castShadow receiveShadow geometry={nodes.Cylinder008_cylinder_0.geometry} material={materials.cylinder} position={[0, -0.007, 0]} />
              </group>
              <group name="Box008" position={[0, 0, -15.427]}>
                <mesh name="Box008_cube-transp_0" castShadow receiveShadow geometry={nodes['Box008_cube-transp_0'].geometry} material={materials['cube-transp']} position={[0, -0.015, 0]} />
              </group>
            </group>
          </group>
        </group>
        <mesh name="SkyBox_Sci-Fi_Space_Room_Interior" castShadow receiveShadow geometry={nodes['SkyBox_Sci-Fi_Space_Room_Interior'].geometry} material={materials['Scene_-_Root']} position={[0, 264.183, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={500} />
        <mesh name="Object_10" castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root.001']} position={[-0.152, 1.839, 2.095]} rotation={[1.676, -0.002, Math.PI]} scale={0.279} />
        <mesh name="Notepad_Texture" castShadow receiveShadow geometry={nodes.Notepad_Texture.geometry} material={materials['Notepad Texture']} position={[-0.17, 0.782, -0.758]} rotation={[0, -0.127, 0]} scale={0.259} />
        <mesh name="ccs_logo" castShadow receiveShadow geometry={nodes.ccs_logo.geometry} material={materials.ccs_logo} position={[1.726, 2.184, -1.31]} rotation={[Math.PI / 2, 0, 0]} scale={0.414} />
        <mesh name="sometechposter" castShadow receiveShadow geometry={nodes.sometechposter.geometry} material={materials.sometechposter} position={[0.998, 1.602, -1.336]} rotation={[1.578, -0.062, 0.039]} scale={0.727} />
        <mesh name="Cart_Cart_Cover_0" castShadow receiveShadow geometry={nodes.Cart_Cart_Cover_0.geometry} material={materials.Cart_Cover} position={[-0.072, 0.773, -1.062]} rotation={[-Math.PI / 2, 0, -0.698]} scale={1.031} />
        <mesh name="Cart_Cart_Yellow_0" castShadow receiveShadow geometry={nodes.Cart_Cart_Yellow_0.geometry} material={materials.PaletteMaterial001} position={[0.141, 0.773, -0.672]} rotation={[-Math.PI / 2, 0, -0.698]} scale={1.031} />
        <mesh name="Cover_����������_0" castShadow receiveShadow geometry={nodes['Cover_����������_0'].geometry} material={materials.material} position={[0.119, 0.005, 0.155]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.443, 1.473, 1.031]} />
        <mesh name="Cube_Wood_Dark_0" castShadow receiveShadow geometry={nodes.Cube_Wood_Dark_0.geometry} material={materials.material_0} position={[2.238, 0.309, 1.508]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Cube003_Red_Cloth_0" castShadow receiveShadow geometry={nodes.Cube003_Red_Cloth_0.geometry} material={materials.Red_Cloth} position={[2.138, 0.412, -0.412]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Cube005_Light_Wood_0" castShadow receiveShadow geometry={nodes.Cube005_Light_Wood_0.geometry} material={materials.Light_Wood} position={[1.942, 0.206, -0.412]} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Plane_TV_Scren_0" castShadow receiveShadow geometry={nodes.Plane_TV_Scren_0.geometry} material={materials.TV_Scren} position={[-0.446, 0.996, -1.007]} rotation={[-Math.PI / 2, 0, -0.069]} scale={1.373} />
        <mesh name="Cube027_TMNT_0" castShadow receiveShadow geometry={nodes.Cube027_TMNT_0.geometry} material={materials.TMNT} position={[1.532, 0.425, -0.388]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} scale={1.031} />
        <mesh name="Cube035_Velikiy_D_0" castShadow receiveShadow geometry={nodes.Cube035_Velikiy_D_0.geometry} material={materials.Velikiy_D} position={[-0.172, 0.773, -0.763]} rotation={[-Math.PI / 2, 0, -0.133]} scale={[1.136, 0.879, 1.031]} />
        <mesh name="Cube046_Boxes_0" castShadow receiveShadow geometry={nodes.Cube046_Boxes_0.geometry} material={materials.Boxes} position={[-1.194, 2.247, 0.711]} rotation={[0, 1.396, 0]} scale={1.031} />
        <mesh name="Plane008_Owner_0" castShadow receiveShadow geometry={nodes.Plane008_Owner_0.geometry} material={materials.Owner} position={[2.397, 0.941, 1.192]} rotation={[-1.324, 0.089, -2.804]} scale={1.031} />
        <mesh name="Room_Brick_0" castShadow receiveShadow geometry={nodes.Room_Brick_0.geometry} material={materials.Brick} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="Room_Floor_0" castShadow receiveShadow geometry={nodes.Room_Floor_0.geometry} material={materials.Floor} position={[0.519, 0.007, 0.262]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.349, 1.607, 1.031]} />
        <mesh name="Room_Wall_0" castShadow receiveShadow geometry={nodes.Room_Wall_0.geometry} material={materials.WallPapper} rotation={[-Math.PI / 2, 0, 0]} scale={1.031} />
        <mesh name="RemoteControl_Tv_0" castShadow receiveShadow geometry={nodes.RemoteControl_Tv_0.geometry} material={materials['material.001']} position={[1.545, 0.739, 1.542]} rotation={[-Math.PI / 2, 0, 0.456]} scale={0.274} />
        <mesh name="shadows_TV_Shadows_0" castShadow receiveShadow geometry={nodes.shadows_TV_Shadows_0.geometry} material={materials.PaletteMaterial002} position={[1.097, 0.729, 1.75]} rotation={[-Math.PI / 2, 0, -0.117]} scale={[0.309, 0.309, 0.274]} />
        <mesh name="TV_glass_TV_Glass_0" castShadow receiveShadow geometry={nodes.TV_glass_TV_Glass_0.geometry} material={materials.TV_Glass} position={[1.122, 0.987, 1.539]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.267, 0.272, 0.251]} />
      </group>
    </group>
  )
}

useGLTF.preload('/WaitingRoom-transformed.glb')
