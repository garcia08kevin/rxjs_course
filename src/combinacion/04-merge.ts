/* recibe uno o mas observables y devuelve el producto de los observables 
simultaneamente, no se termina hasta que se completen todos los observables */

import { fromEvent, interval, map, merge } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

merge(
    keyup$.pipe(map( (key) => key['type'])),
    click$.pipe(map( (key) => key['type'])),
    interval$
).subscribe(console.log);