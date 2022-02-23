import React from 'react';

//El React.memo se utiliza para memorizar un componente o algo y solo se renderize cuando sus componentes cambian, sino de caso contrario estos se renderizaran cada vez que el state de la pagina cambia react lo renderiza todo de nuevo y se pueden ejecutar codigos que no queremos que lo hagan de nuevo cuando solamente el state es el que cambia.
export const Small = React.memo(({value}) => {
    console.log('They called me again :(');

  return (
    <small>{value}</small>
  );
});
