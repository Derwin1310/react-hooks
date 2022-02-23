import React, {useState} from 'react';
import './counter.css';

export const CounterApp = () => {
	//Cuando queremos asignarle diferentes estados al estate lo podemos hacer de esta forma, volverlo un objeto.
	const [state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
		counter4: 40,
		counter5: 50,
	});

	//Luego si queremos sacar unos objetos independientes para utilizarlos los podemos hacer de esta forma , destructurandolos.
	const {counter1, counter2} = state;

	return (
		<>
			<h1>Counter1 = {counter1}</h1>
			<h1>Counter2 = {counter2}</h1>
			<hr />

			<button
				className='btn btn-primary'
				onClick={() => {
					//Para trabajar con los objetos en este caso el counter1 lo tenemos que hacer de esta manera, pero recordando que siempre que le cambiamos el estado al setState con uno nuevo, estamos eliminando al anterior por ese mismo, por eso utilizamos el spread operator por arriba para tener una copia del estado anterior y no eliminarlo.
					setState({
						...state,
						counter1: counter1 + 1,
						counter2: counter2 + 1,
					});
				}}
			>
				+1
			</button>
		</>
	);
};
