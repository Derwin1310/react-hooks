import React from 'react';
import { useForm } from '../../../hooks/useForm';

//Este componente es la otra parte del componente padre TodoApp.js donde trabajamos la parte del imput y el boton de submit que se manejaban en un mismo div en dicho componente.

//Dado que este componente utiliza el handleSubmit, lo traemos para aca mismamente pero con la propiedad de handleAddTodo que es la funcion que tenemos para sumar en el componente padre, asi como el preventDefault y la condicion para que si el input esta vacio o es igual a 1 no se envie nada.

//Tambien nos traemois el useForm que ya que lo utilizamos mismamente en esta parte del input.
export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
		description: '',
	});

    const handleSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		handleAddTodo(newTodo)
		reset();
	};

	return (
		<>
			<h4>Add TODO</h4>
			<hr />

			<form onSubmit={handleSubmit}>
				<input
					className='form-control'
					type='text'
					name='description'
					value={description}
					placeholder='Learn...'
					autoComplete='off'
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='btn btn-outline-primary mt-1 btn-block'
				>
					Add
				</button>
			</form>
		</>
	);
};
