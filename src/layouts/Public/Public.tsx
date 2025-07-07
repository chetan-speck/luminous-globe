// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Fallback from '../../components/Fallback/Fallback';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import { useRenderStatus } from '../../contexts/RenderStatusContext/RenderStatusContext';
import isWebGLAvailable from '../../utils/isWebGLAvailable/isWebGLAvailable';
import style from './Public.module.scss';

// ------------------------------------------------------------------------------------------

const Public: FC = (): JSX.Element => {
	const { earthDone, starsDone } = useRenderStatus();
	const [webglOK, setWebglOK] = useState<boolean | null>(null);

	useEffect(() => {
		setWebglOK(isWebGLAvailable());
	}, []);

	if (webglOK === null) return <></>;

	if (!webglOK) {
		return <Fallback />;
	}

	return (
		<div className={`${style['container']}`}>
			<Outlet />
			<Header />
			<Footer />
			{(!earthDone || !starsDone) && <Loader />}
		</div>
	);
};

// ------------------------------------------------------------------------------------------

export default Public;

// ------------------------------------------------------------------------------------------
