import React, {useEffect, useReducer} from 'react';
import {TodoAdd} from './subComponents/TodoAdd';
import {TodoList} from './subComponents/TodoList';
import {todoReducer} from './todoReducer';
import './styles.css';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoAppMain = () => {
	//Hook useReducer
	//El todos es el estado de los valores que le envia el init al initialState que es el segundo argumento y esta como un array vacio.
	//El dispatch es quien envia las peticiones al todoReducer que es la funcion que se encarga de manejar cambiar los valores del state
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	//Hook para renderizar los objetos en el localStorage cada vez que el estado se cambie
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	//Funcion para borrar objetos del estado
	const handleDelete = todoId => {
		dispatch({
			type: 'delete',
			payload: todoId,
		});
	};

	//Funcion para tachar/no tachar los objetos del estado
	const handleToggle = todoId => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	//Funcion para agregar objetos al estado
	const handleAddTodo = newTodo => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	return (
		<>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className='row'>
				{/* componente hijo que se encarga de mostrar los objetos y borrarlos */}
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>

				{/* Componente hijo que se encarga de dejarnos escribir en el input y agregar nuevos objetos a la lista */}
				<div className='col-5'>
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
};
