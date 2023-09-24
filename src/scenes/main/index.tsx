import React, { useEffect, useState } from "react";
import s from './styles.module.css';
import { Canvas } from '@react-three/fiber';
import Hex from "../../assets/Hex";

function Main() {
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'd') {
        console.log(e)
        setPositionX(positionX + 0.5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={s['scene']}>
      <Canvas
        camera={{
          fov: 10,
          position: [0, 0, 90],
        }}
      >
          <Hex />
      </Canvas>
    </div>
  );
}

export default Main;
