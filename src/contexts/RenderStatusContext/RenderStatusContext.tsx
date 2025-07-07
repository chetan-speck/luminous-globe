// ------------------------------------------------------------------------------------------

import { createContext, useContext, useState } from 'react';

import type { ReactNode } from 'react';
import type { RenderStatus } from './RenderStatusContext.types';

// ------------------------------------------------------------------------------------------

const RenderStatusContext = createContext<RenderStatus | null>(null);

// ------------------------------------------------------------------------------------------

export const useRenderStatus = () => {
	const ctx = useContext(RenderStatusContext);
	if (!ctx)
		throw new Error(
			'useRenderStatus must be used inside <RenderStatusProvider>',
		);
	return ctx;
};

// ------------------------------------------------------------------------------------------

export const RenderStatusProvider = ({ children }: { children: ReactNode }) => {
	const [earthDone, setEarthDone] = useState(false);
	const [starsDone, setStarsDone] = useState(false);

	const value: RenderStatus = {
		earthDone,
		starsDone,
		setEarthDone: () => setEarthDone(true),
		setStarsDone: () => setStarsDone(true),
	};

	return (
		<RenderStatusContext.Provider value={value}>
			{children}
		</RenderStatusContext.Provider>
	);
};

// ------------------------------------------------------------------------------------------
