import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error: ' + error),
    complete: () => console.log('completado [obs]:'),
};

const intervalo$ = new Observable(subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 1000)
    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido')
    }
});

// const subs1 = intervalo$.subscribe(console.log);

// setTimeout(() => {
//     subs1.unsubscribe();
// }, 3000);

/*
 -----SUBJECT-----
 1 - Casteo multiple
 2 - Es un observer
 3 - Usar next, error y complete
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);