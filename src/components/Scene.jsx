import { Canvas } from "@react-three/fiber";

export const Scene = ({ children }) => {
  return (
    <Canvas
      orthographic={true}
      shadows={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
        // zoom: 3,
      }}
    >
      <ambientLight />
      {/* <directionalLight position={[-100, -100, 200]} /> */}
      {children}
    </Canvas>
  );
};
