// src/demo/FourDSimulation/BuildingBlock.jsx
import { useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export default function BuildingBlock({ path, visible, position }) {
  const { scene } = useGLTF(path);

  const { scale } = useSpring({
    scale: visible ? [1, 1, 1] : [1, 0, 1],
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.primitive
      object={scene}
      dispose={null}
      scale={scale}
      position={position}
    />
  );
}
