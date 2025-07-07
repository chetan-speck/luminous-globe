// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useEffect, useState } from 'react';
import { Vector3 } from 'three';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Earth from '../../components/Earth/Earth';
import Stars from '../../components/Stars/Stars';
import { useRenderStatus } from '../../contexts/RenderStatusContext/RenderStatusContext';
import style from './Home.module.scss';

// ------------------------------------------------------------------------------------------

const Home: FC = (): JSX.Element => {
	const [cameraZ, setCameraZ] = useState(4);
	const { earthDone, starsDone } = useRenderStatus();

	useEffect(() => {
		const updateCamera = () => {
			const width = window.innerWidth;

			if (width < 600) {
				setCameraZ(8);
			} else if (width < 840) {
				setCameraZ(6);
			} else if (width < 1200) {
				setCameraZ(4);
			} else {
				setCameraZ(4);
			}
		};

		updateCamera();
		window.addEventListener('resize', updateCamera);
		return () => window.removeEventListener('resize', updateCamera);
	}, []);

	return (
		<div className={`${style['container']}`}>
			<div
				className={`${style['canvas']} ${earthDone && starsDone ? style['show'] : ''}`}
			>
				<Canvas
					camera={{ position: [0, 0, cameraZ], fov: 45 }}
					shadows
				>
					<directionalLight
						position={new Vector3(5, 3, 5)}
						intensity={4}
						castShadow
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={0.5}
						shadow-camera-far={50}
						shadow-camera-left={-10}
						shadow-camera-right={10}
						shadow-camera-top={10}
						shadow-camera-bottom={-10}
					/>
					<ambientLight intensity={0.1} />
					<Stars />
					<Earth />
					<OrbitControls
						enableZoom={true}
						minDistance={1.5}
						maxDistance={cameraZ + 10}
						enablePan={false}
					/>
				</Canvas>
			</div>
		</div>
	);
};

// ------------------------------------------------------------------------------------------

export default Home;

// ------------------------------------------------------------------------------------------
