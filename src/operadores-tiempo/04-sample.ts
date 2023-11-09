import { fromEvent, interval, map, sample} from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    //Al momento que se emite un nuevo valor se emite el anterior
    sample(click$)
).subscribe(console.log);

