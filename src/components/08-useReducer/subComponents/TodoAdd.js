import React, { Fragment } from 'react';
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({ description: '' });

	const handleSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) return;

		const consecutive = JSON.parse(localStorage.getItem('todos')).length + 1

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
			consecutive: consecutive
		};

		handleAddTodo(newTodo)
		reset();
	};

	return (
		<Fragment>
			<h4 className='todo-title'>Add TODO</h4>

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
				<div className='flex justify-between mt3' style={{gap: "0.5rem"}}>
					<button type='submit' className='w-100 btn btn-outline-primary mt-1 btn-block'>
						Add
					</button>
					<button className='w-100 btn btn-outline-primary mt-1 btn-block'>
						Transform
					</button>
					<button className='w-100 btn btn-outline-primary mt-1 btn-block'>
						Elipsis
					</button>
				</div>
				<button className='w-100 btn btn-outline-primary mt-1 btn-block'>
					{false ? "Rock Style" : "Nerd Style"}
				</button>
			</form>
		</Fragment>
	);
};
