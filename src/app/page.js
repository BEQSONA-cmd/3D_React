"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function DogModel() {
  const { scene } = useGLTF('/sneakers.glb');
  
  scene.scale.set(5, 5, 5);

  return <primitive object={scene} />;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">ფეხსაცმელები</h1>
        {/* 3D Model Viewer */}
        <div style={{ width: '800px', height: '800px' }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <DogModel />
            <OrbitControls enableZoom={true} />
            <perspectiveCamera position={[0, 0, 5]} />
          </Canvas>
        </div>
      </main>
    </div>
  );
}
