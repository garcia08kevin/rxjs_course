import { interval, Observer, timer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error: ' + error),
    complete: () => console.log('completado [obs]:'),
};


const interval$ = interval(1000);
const timer$ = timer(2000);
//Intervalo que inicia despues de pasar 2 segundos
const timer1$ = timer(5000,1000);

//Emitir valor despues de 5 segundos
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getDate() +5);
const timer2$ = timer(5000,1000);


//interval$.subscribe(observer);
//timer1$.subscribe(observer);
timer2$.subscribe(observer);
