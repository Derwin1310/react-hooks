//funcion del useReducer para permitirnos agregar,borrar, y tachar objetos de la lista de acuerdo a los casos.
export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];

		case 'delete':
			return state.filter(todo => todo.id !== action.payload);

		case 'toggle':
			return state.map(todo =>
				todo.id === action.payload ? {...todo, done: !todo.done} : todo,
			);

		default:
			return state;
	};
};
