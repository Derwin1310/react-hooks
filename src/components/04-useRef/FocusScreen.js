import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    const ref = useRef();
    console.log(ref);

	const handleClick = () => {
		document.querySelector('input').select();
	};

	return (
		<>
			<h1>Focus Creen</h1>
			<hr />

			<input className='form-control' placeholder='Your name' />
			<button onClick={handleClick} className='btn btn-outline-primary mt-5'>Focus</button>
		</>
	);
};
