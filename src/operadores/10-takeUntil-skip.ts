//takeUntil: emite valores hasta que otro observable emite su primer valor
//skip: saltar un numero determinado de emisiones

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
//no emite valores hasta que se da doble click al boton
const click$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('Antes de skip')),
    skip(1),
    tap(() => console.log('Despues de skip'))
)

counter$.pipe(
    takeUntil(click$),    
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('completado')
})