//=========ESTE CODIGO ES DE LA CLASE DE MULTIPLE CUSTOM HOOKS============

/* import {useEffect, useRef, useState} from 'react';

export const useFetch = url => {
	//En este custom hook volvemos el estado un objeto con los valores y sus key
	const [state, setState] = useState({data: null, loading: true, error: null});

	//Utilizamos el useEffect en la url para que esta se actualice o renderize cada vez que esta misma(url) cambia.
	useEffect(() => {
		// setState({data: null, loading: true, error: null});

		//Hacemos una peticion fetch al parametro o argumento del custom hook que nos devuelve un array de un objeto con author, un quote y otras propiedades que no vamos a usar por los momentos.
		//Cuando la peticion se realiza correctamente cambiamos los valores del setState a loading: false y error: null simulando que se haya hecho una peticion correcta con el ok en 200, la data no se iguala a nada porque para colocar data: data se coloca data sola y es lo mismo
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setState({
					loading: false,
					error: null,
					data,
				});
			});
	}, [url]);

	return state;
}; */

//=========ESTE CODIGO ES DEL REAL EXAMPLE REF DEL useRef=================

import {useEffect, useRef, useState} from 'react';

export const useFetch = url => {
	//El useRef nos ayuda a mantener la referencia del hook mientras este esta activo, por eso le colocamos true.
	const isMounted = useRef(true);
	const [state, setState] = useState({data: null, loading: true, error: null});

	//Aqui creamos un useEffect para que cuando el hook es cancelado por el boton que tenemos en el RealExampleRef.js lo volvemos falso y no nos de un error react a la hora de intentar llamar un hook que no se esta llamando.
	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				//Y aqui en el .then hacemos una condicion sobre si el hook esta activo, llama al estado, y en caso de que no, nos muestre un mensaje en consola
				isMounted.current
					? setState({
						loading: false,
						error: null,
						data,
					  })
					: console.log('The state did not get called');
				});
	}, [url]);

	return state;
};
