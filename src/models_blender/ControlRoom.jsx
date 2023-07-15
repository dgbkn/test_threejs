
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ControlRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/controlRoom-transformed.glb')
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    console.log(actions);
    actions["Hologram|HologramAction.002"].play();
    // actions["Take 001"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Holo-Table" position={[-38.592, -10.746, -61.708]} scale={0.102}>
          <group name="Hologram" position={[0, 149.32, 0]} rotation={[-Math.PI / 2, 0.41, 0]} scale={52.304}>
            <mesh name="Hologram_Hologram_0" castShadow receiveShadow geometry={nodes.Hologram_Hologram_0.geometry} material={materials.Hologram} />
          </group>
        </group>
        <group name="MissionHolo1" position={[-1605.717, 184.234, 115.648]} scale={1.504} />
        <mesh name="Sofa" castShadow receiveShadow geometry={nodes.Sofa.geometry} material={materials.defaultMat} position={[36.149, 10.317, -99.114]} rotation={[-Math.PI / 2, 0, 0.924]} scale={2.015} />
        <mesh name="Locker" castShadow receiveShadow geometry={nodes.Locker.geometry} material={materials.VRay_shader_cacifo} position={[-175.547, -2.883, -119.034]} rotation={[0, -1.571, 0]} scale={4.469} />
        <mesh name="Alien_3_Movie_Poster" castShadow receiveShadow geometry={nodes.Alien_3_Movie_Poster.geometry} material={materials.Textured} position={[80.928, 20.984, -64.788]} rotation={[-Math.PI / 2, 0, -1.428]} scale={0.206} />
        <mesh name="Table001" castShadow receiveShadow geometry={nodes.Table001.geometry} material={materials.blinn1} position={[22.736, -11.384, -72.774]} scale={[3.908, 2.945, 4.39]} />
        <mesh name="Floor002" castShadow receiveShadow geometry={nodes.Floor002.geometry} material={materials.object_1} position={[-1.164, -11.381, -24.61]} rotation={[-Math.PI / 2, 0, 0]} scale={[-2.162, -3.459, -1.088]} />
        <group name="Moniter" position={[73.639, 17.408, 54.204]} rotation={[-Math.PI, 0.647, -Math.PI]} scale={14.978}>
          <mesh name="Cube002" castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cube002_1" castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.desktop} />
          <mesh name="Cube002_2" castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <mesh name="Antique_Radio" castShadow receiveShadow geometry={nodes.Antique_Radio.geometry} material={materials['GWC Antique Radio 06']} position={[-92.512, 21.075, -47.352]} rotation={[0, Math.PI / 2, 0]} scale={25.365} />
        <mesh name="Computer" castShadow receiveShadow geometry={nodes.Computer.geometry} material={materials.object_3} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Desk" castShadow receiveShadow geometry={nodes.Desk.geometry} material={materials.object_0} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Screen" castShadow receiveShadow geometry={nodes.Screen.geometry} material={materials.object_2} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Wires" castShadow receiveShadow geometry={nodes.Wires.geometry} material={materials.PaletteMaterial003} position={[-11.245, -11.708, 69.017]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.532} />
        <mesh name="Twenty_books" castShadow receiveShadow geometry={nodes.Twenty_books.geometry} material={materials['Books.02']} position={[-86.379, -1.222, -40.56]} rotation={[Math.PI, -0.375, Math.PI]} scale={24.505} />
        <mesh name="Feet001" castShadow receiveShadow geometry={nodes.Feet001.geometry} material={nodes.Feet001.material} />
        <mesh name="Table_Table_0" castShadow receiveShadow geometry={nodes.Table_Table_0.geometry} material={materials.Table} position={[-38.592, -5.069, -61.708]} rotation={[-Math.PI / 2, 0, 0]} scale={3.114} />
        <mesh name="Boite_Objet3_0" castShadow receiveShadow geometry={nodes.Boite_Objet3_0.geometry} material={materials.Objet3} position={[-131.312, -4.875, 41.92]} rotation={[-Math.PI, 0.004, -Math.PI]} scale={0.037} />
        <mesh name="Cendrier1_Objet2_0" castShadow receiveShadow geometry={nodes.Cendrier1_Objet2_0.geometry} material={materials.Objet2} position={[-87.012, 17.464, 31.832]} rotation={[0, 1.568, 0]} scale={0.077} />
        <mesh name="Room_Room_Room1_0" castShadow receiveShadow geometry={nodes.Room_Room_Room1_0.geometry} material={materials['3d wallpaper']}  position={[240.989, -11.055, 5.09]} scale={0.175} />
        <mesh name="Neon12_Objet_0" castShadow receiveShadow geometry={nodes.Neon12_Objet_0.geometry} material={materials.Objet} position={[236.068, -11.045, 4.462]} scale={0.171} />
        <mesh name="Box02_Chairback_0" castShadow receiveShadow geometry={nodes.Box02_Chairback_0.geometry} material={materials.Chairback} position={[30.76, 10.52, 15.859]} rotation={[-Math.PI / 2, 0, -2.255]} scale={0.337} />
        <mesh name="Object_3001" castShadow receiveShadow geometry={nodes.Object_3001.geometry} material={materials.material_poster} position={[12.777, 29.504, -128.226]} rotation={[-Math.PI / 2, 0, 0]} scale={0.229} />
        <mesh name="Locker001" castShadow receiveShadow geometry={nodes.Locker001.geometry} material={materials.Locker} position={[72.527, -11.369, 53.297]} rotation={[0, -Math.PI / 2, 0]} scale={18.62} />
        <group name="Body" position={[-74.859, -0.872, 64.432]} rotation={[Math.PI / 2, 0, -2.529]} scale={33.789}>
          <mesh name="Mesh001" castShadow receiveShadow geometry={nodes.Mesh001.geometry} material={materials.body} />
          <mesh name="Mesh001_1" castShadow receiveShadow geometry={nodes.Mesh001_1.geometry} material={materials.fingerbord} />
        </group>
        <group name="Cap-end" position={[-74.888, 3.554, 64.473]} rotation={[Math.PI / 2, 0, -2.529]} scale={33.789}>
          <mesh name="Circle060" castShadow receiveShadow geometry={nodes.Circle060.geometry} material={materials['Stahl.013']} />
          <mesh name="Circle060_1" castShadow receiveShadow geometry={nodes.Circle060_1.geometry} material={materials['leather 01.007']} />
        </group>
        <mesh name="Bolt" castShadow receiveShadow geometry={nodes.Bolt.geometry} material={materials['round brushed']} position={[-74.506, 23.624, 64.958]} rotation={[1.559, -0.008, 0.613]} scale={30.517} />
        <mesh name="Cube007" castShadow receiveShadow geometry={nodes.Cube007.geometry} material={materials['Elfenbein-ersatz']} position={[-74.815, 21.224, 64.369]} rotation={[Math.PI / 2, 0, -2.529]} scale={33.789} />
        <mesh name="Circle001" castShadow receiveShadow geometry={nodes.Circle001.geometry} material={materials.PaletteMaterial004} position={[-77.74, -4.811, 63.201]} rotation={[Math.PI / 2, 0, 0.613]} scale={33.789} />
        <mesh name="mensur_points" castShadow receiveShadow geometry={nodes.mensur_points.geometry} material={materials.perlmutt} position={[-73.324, -2.689, 64.791]} rotation={[Math.PI / 2, 0, -2.529]} scale={33.789} />
        <mesh name="plug_IN_-_OUT" castShadow receiveShadow geometry={nodes['plug_IN_-_OUT'].geometry} material={materials.PaletteMaterial005} position={[-77.376, -5.195, 62.792]} rotation={[1.294, -0.574, 0.431]} scale={33.789} />
        <mesh name="Cylinder006" castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials['Stahl.röllchen.001']} position={[-74.662, -6.967, 65.127]} rotation={[1.051, -0.336, -1.067]} scale={33.789} />
        <mesh name="String001" castShadow receiveShadow geometry={nodes.String001.geometry} material={materials['Saite.001']} position={[-75.648, 21.634, 64.202]} rotation={[1.592, 0.199, -0.957]} scale={[-33.788, 33.788, 33.788]} />
        <group name="Stand" position={[-74.859, -11.747, 64.432]} rotation={[-Math.PI, 0.613, -Math.PI]} scale={33.789}>
          <mesh name="BezierCurve" castShadow receiveShadow geometry={nodes.BezierCurve.geometry} material={materials['wood4.002']} />
          <mesh name="BezierCurve_1" castShadow receiveShadow geometry={nodes.BezierCurve_1.geometry} material={materials['Alu.002']} />
          <mesh name="BezierCurve_2" castShadow receiveShadow geometry={nodes.BezierCurve_2.geometry} material={materials['Foam.001']} />
        </group>
        <mesh name="Plane002" castShadow receiveShadow geometry={nodes.Plane002.geometry} material={materials['Alu.003']} position={[-75.524, -10.969, 70.842]} rotation={[-Math.PI, 0.071, -Math.PI]} scale={2.648} />
        <mesh name="Armario" castShadow receiveShadow geometry={nodes.Armario.geometry} material={materials['Madera fina oscura']} position={[-80.223, -12.713, -65.201]} rotation={[0, Math.PI / 2, 0]} scale={14.15} />
        <mesh name="Pata_Gabinete024" castShadow receiveShadow geometry={nodes.Pata_Gabinete024.geometry} material={materials.PaletteMaterial006} position={[-80.223, -12.713, -65.201]} scale={14.15} />
        <mesh name="Puerta_Gabinete006" castShadow receiveShadow geometry={nodes.Puerta_Gabinete006.geometry} material={materials.PaletteMaterial007} position={[-80.223, -12.713, -65.201]} rotation={[0, Math.PI / 2, 0]} scale={14.15} />
        <mesh name="_mug" castShadow receiveShadow geometry={nodes._mug.geometry} material={materials.PaletteMaterial008} position={[-83.992, -1.579, -84.773]} scale={23.217} />
        <mesh name="SurfaceTablet_3" castShadow receiveShadow geometry={nodes.SurfaceTablet_3.geometry} material={materials.PhotoDisplay} position={[26.064, -0.755, -77.007]} rotation={[2.748, -0.779, 2.858]} scale={35.867} />
      </group>
    </group>
  )
}

useGLTF.preload('/controlRoom-transformed.glb')
