import { throttleTime, filter, fromEvent, map, asyncScheduler } from "rxjs";
import { distinctUntilChanged, pluck } from 'rxjs/operators';

const screen = document.querySelector('body');

const input = document.createElement('input');
screen.append(input);

const click$ = fromEvent(document,'click');

click$.pipe(
    //ignora la emision de mensajes durante un tiempo determinado
    throttleTime(3000)
).subscribe(console.log);

const input$ = fromEvent<KeyboardEvent>(document, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        //leading: primer elemento, trailing: ultimo elemento
        leading: false, trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);
