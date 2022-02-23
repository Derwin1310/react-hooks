import React, {useMemo, useState} from 'react';
import {heavyProcess} from '../../helpers/heavyProcess';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
	const {counter, increment} = useCounter(4000);
	const [show, setShow] = useState(true);

    //El hook del useMemo se utiliza de manera que recibe un callback (la funcion que queremos memorizar) y luego la dependencia que es el state que va a cambiar cada vez que lo incrementemos, es parecido al React.memo que usamos en small.js pero este se se almacena en una constante y lo podemos utilizar en cualquier parte del html cuando queramos.

    //De igual manera cuando cambie algo de la pagina que la obligue a renderizar, este no se va a ejecutar de nuevo, solo cada vez que se ejecute la dependencia que este contiene, en este caso el counter que es el state, se podria decir que es parecido al useEffect en este aspecto respecto a la dependencia como segundo argumento.
	const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

	return (
		<>
			<h1>Memo Hook</h1>
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<hr />

			<p>{memoHeavyProcess}</p>

			<button onClick={increment} className='btn btn-primary'>
				+1
			</button>

			<button
				className='btn btn-outline-primary ml-3'
				onClick={() => setShow(!show)}
			>
				Show/Hide{JSON.stringify(show)}
			</button>
		</>
	);
};
