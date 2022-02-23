import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

export const CounterWithCustomHook = () => {
    //Cuando tenemos el custom hook aqui, lo que hacemos es destructurarlo para tener las funciones que el realiza por separado.
    const {state, increment, decrement, reset} = useCounter(100)

	return (
		<>
			<h1>Counter with hook: {state}</h1>
			<hr />

            {/* Cuando la funcion del custom hook tiene un argumento, la utilizamos de esta manera en el onClick, si no tiene argumento se usa como el reset que no tiene */}
			<button onClick={() => increment()} className='btn'>+ 1</button>
			<button onClick={reset} className='btn'>reset</button>
			<button onClick={() => decrement()} className='btn'>- 1</button>
		</>
	);
};
