import React, {Fragment} from 'react';
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';

export const TodoList = ({ todos, handleDelete, handleToggle, handleEdit }) => (
	<Fragment>
		<ul className='list-group list group-flush'>
			{todos.map((todo, i) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					index={i}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
					handleEdit={handleEdit}
				/>
			))}
		</ul>
	</Fragment>
);

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};