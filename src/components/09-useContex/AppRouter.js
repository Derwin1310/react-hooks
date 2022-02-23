import React from 'react';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import { NavBar } from './NavBar';

//Esto se conoce como react routers y nos permite navegar entre pags cambiando el url de la pagina colocando un / seguido del texto que le inidiquemos como se ve en los Routes, y su sintaxis es la que mostramos ahi, primero se declara el Router, y ahi es donde empezamos a trabajar con los elementos
export const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomeScreen />}/>
					<Route path='/about' element={<AboutScreen />}/>
					<Route path='/login' element={<LoginScreen />}/>
				</Routes>
			</div>
		</Router>
	);
};
