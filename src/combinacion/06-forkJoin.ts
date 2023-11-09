// en el momento que se completan todos los observables y los emite como un objeto del ultimo valor emitido de cada observable

import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(4));
const letras$ = of('a','b','c','d').pipe(delay(3500))

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(([numero, intervalo, letra ]) => {
//     console.log('numero: ', numero),
//     console.log('intervalo: ', intervalo),
//     console.log('letra: ', letra)
// });

// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe(console.log);

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(console.log);