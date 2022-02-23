import React from 'react';
import {TodoListItem} from './TodoListItem';
import PropTypes from 'prop-types';

//Este componente se encarga de hacer el .map de las listas que vienen del componente todo-list-item
//las propiedades son las siguientes:

//KEY: El key es fundamental ya todos sabemos para que no tengan los mismos key los componentes que vienen de el

//TODO: el todo es el array en el que vamos a almacenar todos los objetos, le colocamos todo y no todos ya que es lo mismo por el .map que le estamos haciendo

//Index: es el valor indice que vamos a mostrar de cada objeto y le colocamos i porque es el indice de cada objeto en las props del .map

//handleDelete: es la funcion que recibimos de borrar que enviamos desde el componente padre TodoAppMain.js

//handleToggle: es la funcion que recibimos para tachar o no tachar desde el componente padre TodoAppMain.js
export const TodoList = ({todos, handleDelete, handleToggle}) => {
	return (
		<>
			<ul className='list-group list group-flush'>
				{todos.map((todo, i) => (
					<TodoListItem
                        key={todo.id}
						todo={todo}
						index={i}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				))}
			</ul>
		</>
	);
};


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};