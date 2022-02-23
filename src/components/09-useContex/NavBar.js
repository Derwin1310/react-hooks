import React from 'react';
import {NavLink, Link} from 'react-router-dom';

//El Link y el NavLink son practicamente identicos, con la diferencia de que el navlink puede establecer una clase si el url de la etiqueta coincide con el path al que se le envio, sienvo activleclassname la clase
export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
			<div className='container-fluid'>
				<a className='navbar-brand' to='/'>useContext</a>

				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink activeclassname='active' className='nav-link' to='/'>Home</NavLink>
						<NavLink activeclassname='active' className='nav-link' to='/login'>Login</NavLink>
						<NavLink activeclassname='active' className='nav-link' to='/about'>About</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
