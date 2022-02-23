//Aqui contenemos la funcion que se va a encargar de retornar el state inicial junto con el nuevo estado que le vamos a agregar incluyendo el estado inicial, por eso utlizamos el spread operator

//Mostramos el state como un array vacio para que se llene con lo que se le va a enviar en el componente que se va a utilizar
export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state,action.payload]

		default:
			return state;
	};
};
