import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const SpaceShip = () => {
  const spaceship = useGLTF("./spaceship/scene.gltf");
  console.log(spaceship.scene);

  const group = useRef();

  useFrame(() => {
    group.current.rotation.x += 0.005;
  });

  return (
    <group ref={group}>
      <primitive
        object={spaceship.scene}
        scale={2.5}
        position={[-.5, -2, -1.3]}
      />
    </group>
  );
};

const SpaceShipCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-4, 3, -10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[-8, 1, -8]} intensity={3} />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={0.2}
        />
        <SpaceShip />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceShipCanvas;