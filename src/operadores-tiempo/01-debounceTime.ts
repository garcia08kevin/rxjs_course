import { debounceTime, filter, fromEvent, map } from "rxjs";

const click$ = fromEvent(document,'click');

click$.pipe(
    //emite el resultado del observable luego de un tiempo determinado
    debounceTime(3000)
).subscribe(console.log);

//ejemplo 2
const screen = document.querySelector('body');

const input = document.createElement('input');
screen.append(input);

const input$ = fromEvent<KeyboardEvent>(document, 'keyup');

input$.pipe(
    filter(({key}) => key === 'Enter'),    
    map( () => {
        const titulo = document.createElement('h1');
        titulo.innerText = 'Peticio siendo procesada...';
        screen.append(titulo);
    }),
    debounceTime(1000),
    map( () => {
        const titulo = document.createElement('h1');
        titulo.innerText = 'Peticio procesada';
        screen.append(titulo);
    }),
).subscribe();
