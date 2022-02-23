import React, {useEffect, useReducer} from 'react';
import {useForm} from '../../hooks/useForm';
import './styles.css';
import {todoReducer} from './todoReducer';

//Esto se comento porque es de la forma utilizando el initial state en el reducer, es decir el segundo parametro
// const initialState = [
// 	{
// 		id: new Date().getTime(),
// 		desc: 'Learn React',
// 		done: false,
// 	},
// ];

//Init que recibe el item del localStorage o un array vacio si este es null, viene del useEffect.
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];

	// return [{
	//     id: new Date().getTime(),
	// 	desc: 'Learn React',
	// 	done: false
	// }];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);
	//La misma razon, inicial state con el segundo parametro
	// const [todos, dispatch,] = useReducer(todoReducer, initialState,);
	// console.log(todos);

	const [{description}, handleInputChange, reset] = useForm({
		description: '',
	});

	//este useEffect lo utilizamos para volver a renderizar en el localStorage los cambios quie hse hagan en el state o el todos(es lo mismo)
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	//Aqui tenemos la funcion que se encarga de hacer el rest con el useForm que es nuestro custom hook mas arriba, agregar nuevos objetos al reducer y hacer una peque;a validacion en el input.
	const handleSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
		reset();
	};

	return (
		<>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ul>
						{todos.map((todo, i) => (
							<li key={todo.id} className='list-group-item'>
								<p className='text-center'>
									{i + 1}.{todo.desc}
								</p>
								<button className='btn btn-danger'>delete</button>
							</li>
						))}
					</ul>
				</div>

				<div className='col-5'>
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
				</div>
			</div>
		</>
	);
};
