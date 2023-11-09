//distict no emite los valores que ya se han emitido antes (repetidos)
//disticUntilChanged valida si el ultimo elemento es igual al actual

import { distinct, distinctUntilChanged, from, map, of } from "rxjs";

const numeros$ = of(1, 1, 1, 1, 1, 2, 3, 2, 3, 4, 4, 1);

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Persona {
    nombre: string;
    apellido: string;
    edad?: number;
};

const personas: Persona[] = [
    {
        nombre: 'Pedro',
        apellido: 'Aznar',
        edad: 32
    },
    {
        nombre: 'Charly',
        apellido: 'Garcia',
        edad: 33
    },
    {
        nombre: 'Pedro',
        apellido: 'Aznar',
        edad: 32
    },
    {
        nombre: 'Pedro',
        apellido: 'Aznar',
        edad: 32
    },
    {
        nombre: 'Pedro',
        apellido: 'Aznar',
        edad: 32
    },
    {
        nombre: 'Charly',
        apellido: 'Garcia',
        edad: 33
    },
    {
        nombre: 'Dayla',
        apellido: 'Garcia',
        edad: 16
    },
    {
        nombre: 'Dayla',
        apellido: 'Garcia',
        edad: 16
    },
    {
        nombre: 'Dayla',
        apellido: 'Garcia',
        edad: 16
    },
]

const persona$ = from(personas);
persona$.pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre),    
).subscribe(console.log);