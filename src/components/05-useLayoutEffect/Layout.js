import React, {useLayoutEffect, useRef, useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
	const {counter, increment} = useCounter(1);
	const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`,);
	const {quote} = !!data && data[0];
	const pTag = useRef();
	const [boxSize, setboxSize] = useState({});

    //El objetivo del useLayoutEffect es poder sacar mediciones de diferentes componentes o ejecutar algun codigo luego de que se haya renderizado el html y su sintaxis es identica a la del useEffect.
    //Lo utilizamos con un useRef para tener la referencia del elemento actual que recibe el parrafo de los quotes para sacar las medidas de el.
	useLayoutEffect(() => {
		setboxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<>
			<h1>LayoutEffect</h1>
			<hr />

			<blockquote className='blockquote text-right'>
				<p ref={pTag} className='mb-3'>
					{quote}
				</p>
			</blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button onClick={increment} className='btn btn-primary'>
				Next Quote
			</button>
		</>
	);
};
