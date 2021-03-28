import React from 'react';
import Sun from '../images/icon-sun.svg';
import Moon from '../images/icon-moon.svg';
import './Header.scss';

const Header = ({ toggleTheme, lightTheme }) => {
	return (
		<header className='header' role='banner'>
			<h1 className='header__logo'>TODO</h1>
			<div className='header__img' onClick={() => toggleTheme()}>
				<img src={lightTheme ? Moon : Sun} alt='light theme' />
			</div>
		</header>
	);
};

export default Header;
