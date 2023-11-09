//emite el ultimo valor en un tiempo determinado

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(5000),
    map(({ x, y }) => ({ x, y })),
).subscribe(console.log);