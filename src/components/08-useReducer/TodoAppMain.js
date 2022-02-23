import React, { Fragment, useEffect, useReducer } from 'react';
import { TodoAdd } from './subComponents/TodoAdd';
import { TodoList } from './subComponents/TodoList';
import { todoReducer } from './todoReducer';
import './styles.css';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoAppMain = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = todoId => dispatch({ type: 'delete', payload: todoId });

	const handleEdit = (todoId, newDesc) => dispatch({ type: 'edit', payload: todoId, newDesc: newDesc })

	const handleToggle = todoId => dispatch({ type: 'toggle', payload: todoId });

	const handleAddTodo = newTodo => dispatch({ type: 'add', payload: newTodo });

	return (
		<Fragment>
			<h1 className='mb3 flex justify-center'>TodoApp ({todos.length})</h1>

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
						handleEdit={handleEdit}
					/>
				</div>

				<div className='col-5'>
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</Fragment>
	);
};
