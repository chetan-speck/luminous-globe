// ------------------------------------------------------------------------------------------

import { useRef } from 'react';
import { BackSide, Mesh, TextureLoader } from 'three';

import { useFrame, useLoader } from '@react-three/fiber';

import earthBumpMap from '../../assets/textures/earth-bump-map.jpg';
import earthCloudMap from '../../assets/textures/earth-cloud-map.png';
import earthDayMap from '../../assets/textures/earth-day-map.jpg';
import earthNightMap from '../../assets/textures/earth-night-map.jpg';
import earthSpecularMap from '../../assets/textures/earth-specular-map.jpg';
import { useRenderStatus } from '../../contexts/RenderStatusContext/RenderStatusContext';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

const Earth: FC = (): JSX.Element => {
	const meshRef = useRef<Mesh>(null);
	const atmosphereRef = useRef<Mesh>(null);
	const cloudRef = useRef<Mesh>(null);
	const { setEarthDone } = useRenderStatus();

	const [dayTexture, nightTexture, specularTexture, bumpTexture, cloudTexture] =
		useLoader(TextureLoader, [
			earthDayMap,
			earthNightMap,
			earthSpecularMap,
			earthBumpMap,
			earthCloudMap,
		]);

	const axialTilt = 23.44 * (Math.PI / 180);

	if (meshRef.current) {
		meshRef.current.rotation.z = axialTilt;
	}
	if (atmosphereRef.current) {
		atmosphereRef.current.rotation.z = axialTilt;
	}
	if (cloudRef.current) {
		cloudRef.current.rotation.z = axialTilt;
	}

	const rotationSpeed = (2 * Math.PI) / (24 * 60 * 60);
	const cloudRotationSpeed = rotationSpeed * 0.9;

	useFrame(() => {
		const speed = 10;

		if (meshRef.current) {
			meshRef.current.rotation.y += rotationSpeed * speed;
		}
		if (atmosphereRef.current) {
			atmosphereRef.current.rotation.y += rotationSpeed * speed;
		}
		if (cloudRef.current) {
			cloudRef.current.rotation.y += cloudRotationSpeed * speed;
		}
	});

	return (
		<>
			<mesh
				ref={meshRef}
				castShadow
				receiveShadow
				onAfterRender={setEarthDone}
			>
				<sphereGeometry args={[1, 64, 64]} />
				<meshStandardMaterial
					map={dayTexture}
					emissiveMap={nightTexture}
					emissive='#ffffff'
					emissiveIntensity={1}
					bumpMap={bumpTexture}
					bumpScale={2}
					roughness={0.5}
					metalnessMap={specularTexture}
					metalness={0.1}
				/>
			</mesh>
			<mesh ref={atmosphereRef}>
				<sphereGeometry args={[1.008, 64, 64]} />
				<meshStandardMaterial
					color='#0088ff'
					transparent
					opacity={1}
					emissive='#8888ff'
					emissiveIntensity={0.1}
					side={BackSide}
					roughness={0.1}
					metalness={0.2}
				/>
			</mesh>
			<mesh
				ref={cloudRef}
				castShadow
			>
				<sphereGeometry args={[1.004, 64, 64]} />
				<meshStandardMaterial
					map={cloudTexture}
					alphaMap={cloudTexture}
					transparent
					opacity={1}
					roughness={0.7}
					metalness={0.1}
				/>
			</mesh>
		</>
	);
};

// ------------------------------------------------------------------------------------------

export default Earth;

// ------------------------------------------------------------------------------------------
