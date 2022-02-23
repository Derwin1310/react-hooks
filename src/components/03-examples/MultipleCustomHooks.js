import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
	//Aqui llamamos al custom hook que tenemos de contador para asignarle un nuevo valor a la url del api y asi vaya pasando los quotes a medida que hacemos click en el boton.
	const {counter, increment} = useCounter(1);

	//Aqui destructuramos el state de useFetch que es lo que retorna y agarramos el loading y la data para ver que devuelve.
	const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	// console.log(data);
	//Luego aqui destructuramos los valores de data, es importante que cuando data es true nos devuelva el valor de data[0]
	//Colocamos el !!data porque data al principio vale null y el programa nos da error al destructurarle los valores, asi que volvemos false el data haciendo !data, y luego tenemos que volverlo true para que devuelta el valor de data[0] y destructurarlo, por eso lo volvemos a negar de esta manera.
	const {author, quote} = !!data && data[0];
	// console.log(author,quote);

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{
				loading
				?
					<div className='alert alert-info text-center'>Loading...</div>		
				:
					<blockquote className='blockquote text-right'>
						<p className='mb-3'>{quote}</p>
						<footer className='blockquote-footer'>{author}</footer>
					</blockquote>
			}

			<button onClick={increment} className='btn btn-primary'>Next Quote</button>

		</>
	);
};
