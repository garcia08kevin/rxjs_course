import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

//merge map
// click$.pipe(
//     mergeMap(() => interval$)
// ).subscribe(console.log)

//switch map (completa las subscripciones anteriores)
click$.pipe(
    switchMap(() => interval$)
).subscribe(console.log)