//distict no emite los valores que ya se han emitido antes (repetidos)
//disticUntilChanged valida si el ultimo elemento es igual al actual
//disticUntilKeyChanged valida si una propiedad es igual a la anterior

import { distinct, distinctUntilKeyChanged, from, of } from "rxjs";

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
    distinctUntilKeyChanged('nombre'),
).subscribe(console.log);