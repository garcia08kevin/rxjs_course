import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val => val % 2 === 0)
// ).subscribe(console.log)

range(20, 30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe(console.log)

interface Personaje{
    tipo:string;
    nombre:string;
}

const personajes:Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Heroe',
        nombre: 'Spiderman'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    },
    {
        tipo: 'Villano',
        nombre: 'Duende Verdee'
    },    
];

from(personajes).pipe(
    filter( ({tipo}) => tipo === 'Heroe' )
)//.subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(    
    filter(({key}) => key === 'Enter'),
    map(({key}) => `Has presionado la tecla ${key}`)
);

keyup$.subscribe(console.log);