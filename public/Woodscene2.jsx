/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 woodscene2.gltf --transform 
Files: woodscene2.gltf [52.21KB] > /home/juan/Documents/new Database/newProject/JapanesseJoinery/my-joinery/public/woodscene2-transformed.glb [3.87MB] (-7316%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/woodscene2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Wood_chair.geometry} material={materials['brown wood']} position={[-1.218, -0.137, -0.495]} />
      <mesh geometry={nodes.assise002.geometry} material={materials['Material.002']} position={[-1.089, 0.322, -1.735]} scale={[1.015, 1, 0.993]} />
      <mesh geometry={nodes.banquette001.geometry} material={materials['Material.001']} position={[-0.562, 0.203, -1.779]} />
      <mesh geometry={nodes.kitchen_table.geometry} material={materials.PaletteMaterial005} position={[-2.231, 0.71, -0.073]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.PaletteMaterial001} position={[-2.231, 0.655, -0.973]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.leg.geometry} material={materials.PaletteMaterial002} position={[-1.81, 0.327, -0.973]} rotation={[Math.PI / 2, -1.414, Math.PI / 2]} />
      <mesh geometry={nodes.rubber_feet001.geometry} material={materials.PaletteMaterial003} position={[-1.755, 0.002, -0.973]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.wood_plank1.geometry} material={materials.PaletteMaterial004} position={[-2.556, 0.71, -0.073]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Table.geometry} material={materials['Teak wood polished']} position={[0.959, -0.349, -0.205]} rotation={[0, 0.291, 0]} />
      <mesh geometry={nodes.side_table_01.geometry} material={materials.side_table_01} position={[0.995, 0, -1.899]} rotation={[0, Math.PI / 2, 0]} />
      <instancedMesh args={[nodes.Bolt.geometry, materials.PaletteMaterial001, 11]} instanceMatrix={nodes.Bolt.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/woodscene2-transformed.glb')