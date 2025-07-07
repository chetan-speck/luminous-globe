// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import style from './Fallback.module.scss';

// ------------------------------------------------------------------------------------------

const Fallback: FC = (): JSX.Element => {
	return (
		<div className={`${style['container']}`}>
			<h1 className={`${style['headline']}`}>WebGL Not Supported</h1>
			<p className={`${style['description']}`}>
				Sorry, your browser or device doesn’t support WebGL, which is required
				to display the 3D Earth visualization. <br />
				Please try the latest version of Chrome, Edge, or Firefox on a desktop
				or a modern mobile device.
			</p>
		</div>
	);
};

// ------------------------------------------------------------------------------------------

export default Fallback;

// ------------------------------------------------------------------------------------------
