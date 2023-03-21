/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 roushDraco.gltf --transform
Author: monsefzz (https://sketchfab.com/monsefzz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ford-mustang-roush-2019-stage-3-c3be292e50774be98bac9de749579d80
Title: Ford Mustang ROUSH 2019 - Stage 3
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/3dglb/mustangroush.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.11}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Base} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.BadgeA} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.GlassDarkMtl} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.GlassMtl} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Grille1A} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Grille2A} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.BadgeA} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Grille4A} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Grille2A} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.GlassRedMtl} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Lights} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Paint} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.TexturedA} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Grille2A} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.BadgeA} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.interior} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Grille2A} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.interior_o} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.BadgeA} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.color2_o} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Grille2A} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.CalliperBadgeBMtl} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Coloured} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Coloured} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.ColouredMtl} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.paint1Mtl} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Wheel1A} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Wheel1A} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Wheel2A} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Wheel2A} />
      </group>
    </group>
  )
}

useGLTF.preload('/3dglb/mustangroush.glb')
