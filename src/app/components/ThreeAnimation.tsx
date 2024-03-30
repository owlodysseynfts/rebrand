'use client'

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let cube: THREE.Mesh;

    // Initialize Three.js scene
    const initScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
    };

    // Render the scene
    const render = () => {
      renderer.render(scene, camera);
    };

    // Animate the cube's movement from the initial position to the final position
    const animateCube = () => {
      const finalPosition = { x: 2, y: 0, z: 0 };
      const initialPosition = { x: -2, y: 0, z: 0 };
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1); // Normalize time

        // Interpolate position
        const newX = THREE.MathUtils.lerp(initialPosition.x, finalPosition.x, t);
        cube.position.set(newX, initialPosition.y, initialPosition.z);

        if (t < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // Initialize scene and animate cube
    initScene();
    animateCube();

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeAnimation;
