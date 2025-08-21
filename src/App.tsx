import { Canvas } from '@react-three/fiber';

function App() {

  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
