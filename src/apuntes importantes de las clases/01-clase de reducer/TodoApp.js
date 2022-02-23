import React, {useReducer} from 'react';
import './styles.css';
import {todoReducer} from './todoReducer';

//Este es el estado inicial de nuestra aplicacion a la hora de mostrar por primera vez la pagina
const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Learn React',
		done: false,
	},
];

//En pocas palabras, el useReducer es una alternativa al useState.Acepta un reducer de tipo (state, action) => newState y devuelve el estado actual emparejado con un método dispatch.

//Comenzamos creando la funcion que va a contener el useReducer como cualquier otra aplicacion de cualquier hook.
export const TodoApp = () => {
    //El Todos en el useReducer contiene el el valor del initialState y todo lo que se le vaya agregando de acuerdo a las actions al hook,.
    //luego tenemos el dispatch que es el que se encarga de disparar la action que va a contener el nuevo conjunto de valores que se mostraran con el reducer.
    //En los argumentos del reducer contamos con tres propiedades pero por los momentos solo utilizamos dos, que son el todoReducer que es el que contiene la funcion que va a recibir los valores nuevos a traves del action para hacer las condiciones sobre si se muestran o no (mirar el todoReducer.js)
    //Y el initialState que es el valor que va a tener el todos al comienzo.
	const [todos, dispatch] = useReducer(todoReducer, initialState);
	console.log(todos);

    //Realizamos la funcion para que contenga los nuevos todos que se van a recibir por medio del todoReducer junto con el action, como lo vmimos en las primeras clases de intro-reducer.js
	const handleSubmit = e => {
		e.preventDefault();

		const newTodo = {
			id: new Date().getTime(),
			desc: 'New task',
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
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
							placeholder='Learn...'
							autoComplete='off'
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
