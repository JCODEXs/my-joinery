"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Loader";
import { Desk } from "../../public/models/desk3d";
const Background = () => {
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
      style={{
        height: "331px",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
      camera={{ near: 1, far: 400, position: [12, 4, 4] }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 10]} intensity={1.5} />
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

        <Desk
          position={screenPosition}
          scale={[7, 7, 7]}
          rotation={[0, -20, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default Background;
