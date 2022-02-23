import React from 'react';
import PropTypes from 'prop-types';

//El TodoListItem es el componente que se encarga de renderizar los elementos en listas con sus clases y que el boton de delete realize la funcion
//sus propiedades se encargan de hacer lo siguiente:

//todo: es el objeto que se renderiza en la lista al pasarse al array de todos del componente padre TodoList.js

//index: es el indice del objeto que es renderizado en el parrafo y se lo enviamos al componente padre TodoList.js para tener una referencia al indice de los objetos.

//handleDelete: es la funcion para borrar que la utilizamos aqui y la traemos desde el componente abuelo TodoAppMain.js pasando por el componente padre hasta llegar aqui

//handleToggle: es la funcion para tachar/destachar que la utilizamos aqui y la traemos desde el componente abuelo TodoAppMain.js pasando por el componente padre hasta llegar aqui
export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
	return (
		<>
			<li key={todo.id} className='list-group-item'>
				<p
					onClick={() => handleToggle(todo.id)}
					className={`${todo.done && 'complete'}`}
				>
					{index + 1}.{todo.desc}
				</p>
				<button
					onClick={() => handleDelete(todo.id)}
					className='btn btn-danger'
				>
					delete
				</button>
			</li>
		</>
	);
};

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
};
