//completa la subscripcion en la primera emision o bajo una condicion

import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');
// let cont = 0;

click$.pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    tap(console.log),
    map(({ clientX, clientY }) => clientY - clientX),
    // tap(console.log),
    first<number>(val => val >= 0)
    // map(() => cont++),
    // tap(console.log),    
    // first(val => val >= 10)
).subscribe({
    //no se ejecuta hasta que se cumpla la condicion en el first
    next: val => console.log('next: ', val),
    complete: () => console.log('completado')
});
