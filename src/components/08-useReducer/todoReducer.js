export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];

		case 'delete':
			return state.filter(todo => todo.id !== action.payload);

		case 'toggle':
			return state.map(todo =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
			);

		case 'edit':
			const arrayToModify = state.find(todo => todo.id === action.payload)
			const rest = state.filter(todo => todo.id !== action.payload);

			return [...rest, { ...arrayToModify, desc: action.newDesc }];

		default:
			return state;
	};
};
