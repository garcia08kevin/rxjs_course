import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error:error => console.warn('error: ' + error),
    complete: () => console.log('completado [obs]:'),
};

const intervalo$ = new Observable<Number>(subs => {
    let i = 0;
    const interval = setInterval(() => {
        subs.next(i++);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    //procedimiento que se ejecuta en el metodo unsubscribe()
    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subscription = intervalo$.subscribe(num => console.log('Numero:' + num));
const subscription2 = intervalo$.subscribe(num => console.log('Numero:' + num));
const subscription3 = intervalo$.subscribe(num => console.log('Numero:' + num));

//Agregar una subcripcion hija
subscription.add(subscription2.add(subscription3));
 
setTimeout(() => {
    subscription.unsubscribe()
}, 3000)