import { useState } from "react";

//en este custom hook podemos aplicar otros hooks para luego utilizarlo en un componente como nosotros queramos, en este caso utilizamos el useState
export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialState);
    };

    //al ser creadas como una funcion comun le tenemos que colocar un return, en este caso retornamos el state que es el valor inicial, el increment, decrement y reset, sin los ().
    return {
        counter,
        increment,
        decrement,
        reset,
    };
};
