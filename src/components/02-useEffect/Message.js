import React, {useEffect, useState} from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({x: 0, y: 0});
	const {x, y} = coords;

    //El useEffect se utiliza de manera condicional por decirlo de alguna manera, ya que le podemos enviar una funcion antes del return, luego asignarle otra despues y al final colocar el array vacio para que no se renderize multiples veces o ejecutar la funcion solo cuando queramos renderizar algo en especifico, la condicion la encontramos en el SimpleForm.js
	useEffect(() => {
		const mouseMove = e => {
			const coords = {x: e.x, y: e.y};
			setCoords(coords);
		};
        //Cuando vamos a ejecutar eventos es importante colocar en el return que queremos remover los eventos que tenemos aqui en caso de que no se vaya a cumplir la ejecucion, ya que si no este seguira ejecutandose aun cuando la funcion diga que no se cumplira
		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<>
			<h3>You are amazing!</h3>
			<p>
				X: {x} Y: {y}
			</p>
		</>
	);
};
