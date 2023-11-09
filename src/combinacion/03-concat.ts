/* recibe observables, para crea un nuevo observable (se ejecutan en cadena)
 cuando se terminan todos los observables se completa el observable */

import { concat, interval, take } from "rxjs";

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
).subscribe(console.log)
