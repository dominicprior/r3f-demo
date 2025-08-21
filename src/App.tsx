// import { PerspectiveCamera } from '@react-three/drei';
import {  } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function Cube() {
    const r = useRef<Mesh>(null);
    useFrame(() => {
        if (!r.current) {
            return;
        }
        r.current.rotation.x += 0.01;
        r.current.rotation.y += 0.01;
    });
    return (
        <mesh ref={r}>
            <boxGeometry args={[3,3,3]}/>
            <meshStandardMaterial color="white" />
        </mesh>
    );
}

function App() {
    return (
        <Canvas>
            {/* <ambientLight /> */}
            <pointLight position={[10,10,10]} intensity={1000} />
            {/* <PerspectiveCamera makeDefault position={[1, 0, 3]} /> */}
            <Cube />
        </Canvas>
    );
}

export default App
