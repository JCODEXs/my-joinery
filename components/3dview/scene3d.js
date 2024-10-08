"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";
import { WoodScene } from "../../public/models/Woodscene";

const Scene3d = () => {
  const adjustSceneForScreen = () => {
    let screenScale;
    let screenPosition = [2, 0, 0];
    let rotation = [0.1, 0, 0];

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [2, 0, 0];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [screenScale, screenPosition, rotation] = adjustSceneForScreen();

  return (
    <Canvas
      className="w-full h-screen bg-transparent "
      camera={{ near: 10, far: 300, position: [0, 4, 4] }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 10]} intensity={2} />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        {/* <Sky />
   
    <Fox
    position={screenPosition}
    scale={screenScale}
    rotation={rotation}
    /> */}
        {/* <Bonsai
    scale={[4,4,3]}
    rotation={[0,0,0]}
    /> */}
        <WoodScene
          position={screenPosition}
          scale={[7, 7, 5]}
          rotation={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene3d;
