import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import { projects } from "../i18n-1.js";
import { Canvas, useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import hero from "../assets/images/hero.jpg";

function Designs() {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      console.log("カメラ位置:", cameraRef.current.position);
    }
  }, []);

  return (
    <div>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <group>
          {/* Floor */}
          <GreenSquare position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          {/* Back Wall */}
          <GreenSquare position={[0, 0, -1]} rotation={[0, 0, 0]} />
          {/* Left Wall */}
          <GreenSquare position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          {/* Right Wall */}
          <GreenSquare position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
          <ToolTip1 />
          <ToolTip2 />
          <ToolTip3 />
        </group>
        <ambientLight />
        <PerspectiveCamera ref={cameraRef} position={[0.1, 2, 2]} makeDefault />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function GreenSquare({ position, rotation }) {
  const texture = useLoader(TextureLoader, hero); // Replace with the path to your image

  return (
    <mesh position={position} rotation={rotation} scale={[1, 1, 1]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
}

function ToolTip1() {
  return (
    <Html center position={[-1, 1, -1]}>
      <p>Click and drag on the white part to move the camera</p>
    </Html>
  );
}

function ToolTip2() {
  return (
    <Html center position={[1, -1, -1]}>
      <p>Scroll to zoom in and out</p>
    </Html>
  );
}

function ToolTip3() {
  return (
    <Html center position={[-1, -1, 1]}>
      <p>{"<== Code's on the left, with details in the comments"}</p>
    </Html>
  );
}

export default Designs;
