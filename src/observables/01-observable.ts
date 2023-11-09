import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error:error => console.warn('error: ' + error),
    complete: () => console.log('completado [obs]:'),
};

const imprimir = (message) => console.log('valor: ' + message);

//const obs$ = Observable.create();
const obs$ = new Observable(subs => {
    //Emite el valor a los subscritores
    subs.next('Hola');
    subs.next('Mundo');
    //Ya no emite valores a subscritores
    subs.next('Mundo');
    /* Forzar error
    const a = undefined;
    a.nombre = 'Kevin';
    */
    subs.complete();
});

//obs$.subscribe(console.log);

obs$.subscribe(
    imprimir,
    error => console.warn('error: ' + error),
    () => console.info('Completed')
)

console.log('OBSERVER')
obs$.subscribe(observer);