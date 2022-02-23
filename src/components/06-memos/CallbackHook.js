import React, {useCallback, useState} from 'react';
import {ShowIncrement} from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

    //Sinceramente no entendi el 40% de lo que significa el useCallback asi que copiare y pegare lo que dice en la documentacion.
    //Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarias.
	const increment = useCallback((num) => {
		setCounter(c => c + num);
	}, [setCounter]);

	return (
		<>
			<h1>useCallback Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={increment} />
		</>
	);
};
