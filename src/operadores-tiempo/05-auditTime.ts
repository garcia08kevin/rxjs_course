import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(({ x, y }) => console.log('tap: ', ({ x, y }))),
    //emite el ultimo valor de un observable luego de un tiempo determinado (espera a ver si hay mas emisiones para mostrar la ultima)
    auditTime(2000),
    map(({ x, y }) => ({ x, y })),
).subscribe(console.log);