/* eslint-disable react/no-unknown-property */
"use client";

import React, { useMemo } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import * as THREE from "three";

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 40,
    pixelColor: new THREE.Color("#5227FF"),
  },
  `
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  `
);

extend({ DotMaterial });

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }) {
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);

  const mat = useMemo(() => new DotMaterial(), []);
  mat.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x) => x),
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={mat}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 28,
  trailSize = 0.08,
  maxAge = 350,
  interpolate = 4.7,
  easingFunction = (x) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: "high-performance",
    alpha: true,
  },
  color = "#5227FF",
  className = "",
}) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={`w-full h-full`}
        camera={{ position: [0, 0, 1] }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </div>
  );
}
