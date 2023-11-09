//Completa el observador cuando se cumple la condicion 

import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    // el boolean recupera tambien el valor que cumplio con la condicion
    takeWhile(({y}) => y <= 150, true)
).subscribe({
    //no se ejecuta hasta que se cumpla la condicion en el first
    next: val => console.log('next: ', val),
    complete: () => console.log('completado')
});