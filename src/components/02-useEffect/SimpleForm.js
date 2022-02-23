import React, {useEffect, useState} from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const {name, email} = formState;

	//El useEffect lo utilizamos para escuchar cambios especificos en alguna parte del state o la aplicacion, se puede aplicar a funciones u objetos que tengamos en el state,para que el hook efect se ejecute una sola vez cuando el programa se renderiza por primera vez, le colocamos un array vacio al final como en este ejemplo y el clog de hey! solo se ejecuta una vez
	useEffect(() => {
		console.log('hey!');
	}, []);

	//Si le asignamos una propiedad por defecto al array como lo es email, este clog se va a ejecutar cada vez que el email tenga un cambio en el input
	useEffect(() => {
		console.log('el email cambio');
	}, [email]);

	//Aqui en vez de colocarle e.target.algo, desestructuramos el target y simplemente colocamos abajo que el target.name sea igual al target.value que es lo que colocamos en el input
	const handleInputChange = ({target}) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<form>
			<h1>useEffect</h1>
			<hr />

            {/* estos classname son parte del boostrap */}
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Your name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='example@gmail.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

            {name === '123' && <Message />}
		</form>
	);
};
