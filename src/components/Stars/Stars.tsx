// ------------------------------------------------------------------------------------------

import { useRef } from 'react';
import { BackSide, Mesh, ShaderMaterial, TextureLoader, Vector3 } from 'three';

import { useFrame, useLoader } from '@react-three/fiber';

import starsMap from '../../assets/textures/stars-milky-way.jpg';
import { useRenderStatus } from '../../contexts/RenderStatusContext/RenderStatusContext';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

const Stars: FC = (): JSX.Element => {
	const starsRef = useRef<Mesh>(null);
	const [starsTexture] = useLoader(TextureLoader, [starsMap]);
	const { setStarsDone } = useRenderStatus();

	const rotationSpeed = ((2 * Math.PI) / (24 * 60 * 60)) * 0.1;

	useFrame(() => {
		if (starsRef.current) {
			starsRef.current.rotation.y += rotationSpeed * 0.5;
		}
	});

	const starsMaterial = new ShaderMaterial({
		uniforms: {
			starsTexture: { value: starsTexture },
			innerColor: { value: new Vector3(0.67, 0.73, 1.0) },
			outerColor: { value: new Vector3(0.0, 0.0, 0.0) },
			opacity: { value: 0.5 },
			emissiveIntensity: { value: 0.1 },
		},
		vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vViewPosition = -(modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
		fragmentShader: `
            uniform sampler2D starsTexture;
            uniform vec3 innerColor;
            uniform vec3 outerColor;
            uniform float opacity;
            uniform float emissiveIntensity;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                // Sample star texture
                vec4 texColor = texture2D(starsTexture, vUv);
                // Calculate radial distance from UV center
                float dist = length(vUv - vec2(0.5, 0.5));
                // Create gradient: dense near surface, fading outward
                float gradient = smoothstep(0.3, 0.7, dist);
                vec3 color = mix(innerColor, outerColor, gradient);
                // Combine texture with gradient
                vec3 finalColor = texColor.rgb + color * emissiveIntensity;
                // Output with transparency
                gl_FragColor = vec4(finalColor, opacity * (1.0 - gradient) * texColor.a);
            }
        `,
		side: BackSide,
		transparent: true,
	});

	return (
		<>
			<mesh
				ref={starsRef}
				onAfterRender={setStarsDone}
			>
				<sphereGeometry args={[100, 64, 64]} />
				<shaderMaterial
					attach='material'
					{...starsMaterial}
				/>
			</mesh>
		</>
	);
};

// ------------------------------------------------------------------------------------------

export default Stars;

// ------------------------------------------------------------------------------------------
