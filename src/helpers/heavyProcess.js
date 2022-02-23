// import React from 'react';

export const heavyProcess = iteraciones => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('There we go');
    };
    return `${iteraciones} iteraciones realizadas`;
};
