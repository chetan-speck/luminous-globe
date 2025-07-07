// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import logo from '../../assets/logos/logo.svg';
import Button from '../Button/Button';
import style from './Header.module.scss';

// ------------------------------------------------------------------------------------------

const Header: FC = (): JSX.Element => {
	return (
		<header className={`${style['container']}`}>
			<div className={`${style['leading']}`}>
				<img
					src={logo}
					alt='logo'
					className={`${style['logo']}`}
				/>
			</div>
			<div className={`${style['trailing']}`}>
				<Button />
			</div>
		</header>
	);
};

// ------------------------------------------------------------------------------------------

export default Header;

// ------------------------------------------------------------------------------------------
