const initialState = [
	{
		id: 1,
		todo: 'Buy bread',
		done: false,
	},
];

//La unica manera de cambiar el state del reducer, es a traves del action, y siempre tiene que devolver un estado nuevo
const todoReducer = (state = initialState, action) => {
	if (action?.type === 'add') {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

//Objeto nuevo que se va a devolver
const newTodo = {
	id: 2,
	todo: 'Buy milk',
	done: false,
};

//Accion en la que se va a devolver el objeto newTodo al estado de todoReducer
const addTodoAction = {
	type: 'add',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
