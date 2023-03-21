import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Hellcat from '../3dmodels/Hellcat'

const Dodge = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Hellcat/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate/>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Dodge;