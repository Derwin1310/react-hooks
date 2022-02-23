import React, {useEffect} from 'react';
import {useForm} from '../../hooks/useForm';
import './effects.css';

//Este es un ejemplo de el SimpleForm.js pero con un custom hook que se lleva la funcioin del handleInputChange para que este componente se pueda leer mejor.
export const FormWithCustomHook = () => {
	const [formValues, handleInputChange, handleSubmit] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const {name, email, password} = formValues;

	//Aqui habia una funcion que evitaba el submit pero como tarea de mi mismo me lo lleve al mismo useForm y lo importe para que no ocupara espacio aqui :)

	useEffect(() => {
		console.log('email change');
	}, [email]);

	return (
		<form onSubmit={handleSubmit}>
			<h1>Form with custom hook</h1>
			<hr />

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

			<div className='form-group'>
				<input
					type='password'
					name='password'
					className='form-control'
					placeholder='********'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button className='btn btn-primary'>Save</button>
		</form>
	);
};
