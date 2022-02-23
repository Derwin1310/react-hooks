import React, {useEffect, useReducer} from 'react';
import {useForm} from '../../hooks/useForm';
import './styles.css';
import {todoReducer} from './todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);
	const [{description}, handleInputChange, reset] = useForm({
		description: '',
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = todoId => {
		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

    //Este handle toggle se encarga de cambiar el done de los objetos que se vayan agregando al estado, la logica se encuentra en el todoReducer.js
	const handleToggle = todoId => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

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
								<p
                                    //Recordemos que para aplicar funciones que reciben un argumento en el onclick tenemos que hacerlo de esta manera
									onClick={() => handleToggle(todo.id)}
                                    //Aqui hacemos una condicion para que si el done de los objetos del state estan en true, se aplique la clase que tacha la tipografia.
									className={`${todo.done && 'complete'}`}
								>
									{i + 1}.{todo.desc}
								</p>
								<button
                                    //Lo mismo para el boton de delete
									onClick={() => handleDelete(todo.id)}
									className='btn btn-danger'
								>
									delete
								</button>
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
