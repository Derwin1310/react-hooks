import React, {useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import {Small} from './Small';

export const Memorize = () => {
	const {counter, increment} = useCounter(10);
	const [show, setShow] = useState(true);

	return (
		<>
			<h1>
				Counter: <Small value={counter} />
			</h1>
			<hr />

			<button onClick={increment} className='btn btn-primary'>
				+1
			</button>

			<button
				className='btn btn-outline-primary ml-3'
				onClick={() => setShow(!show)}
			>
                {/* Aqui colocamos el json.stringify ya que asi es como se muestran los valores booleanos en pantalla */}
				Show/Hide{JSON.stringify(show)}
			</button>
		</>
	);
};
