import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleEdit, handleDelete, handleToggle }) => {
	const { id, done, desc, consecutive } = todo;

	return (
		<Fragment>
			<li key={id} className='list-group-item'>
				<div>
					<span>{consecutive + ". "}</span>
					<input
						onChange={(e) => handleEdit(id, e.target.value)}
						defaultValue={desc}
						className={"fake-input " + `${done && 'complete'}`}
						disabled={done}
					/>
				</div>
				<div>
					<button onClick={() => handleDelete(id)} className='btn btn-danger mr2'>
						delete
					</button>
					<button onClick={() => handleToggle(id)} className='btn btn-warning'>
						done
					</button>
				</div>
			</li>
		</Fragment>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		done: PropTypes.bool.isRequired,
		desc: PropTypes.string.isRequired
	}),
	index: PropTypes.number.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};
