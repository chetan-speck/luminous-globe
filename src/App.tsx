// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import './styles/animations.scss';
import './styles/global.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppRoutes from './constants/appRoutes';
import { RenderStatusProvider } from './contexts/RenderStatusContext/RenderStatusContext';
import Public from './layouts/Public/Public';
import Home from './screens/Home/Home';

// ------------------------------------------------------------------------------------------

const App: FC = (): JSX.Element => {
	return (
		<RenderStatusProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Public />}>
						<Route
							path={AppRoutes.HOME()}
							element={<Home />}
						/>
						<Route
							path='*'
							element={<Navigate to={AppRoutes.HOME()} />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</RenderStatusProvider>
	);
};

// ------------------------------------------------------------------------------------------

export default App;

// ------------------------------------------------------------------------------------------
