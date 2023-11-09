import { from, interval } from 'rxjs';
import { take, scan, map } from 'rxjs/operators';

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

interval(1000).pipe(
    take(10),
    scan(totalReducer, 2) //funcion acumuladora que muestra el valor acumulado en cada iteracion
).subscribe({
    next: val => { console.log('next: ', val) },
    complete: () => console.log('Complete')
})

//Redux
//Patron para manejo global de la aplicacion desde un objeto

// interface Usuario {
//     id: string;
//     autenticado: boolean;
//     token?: string;
//     edad?: number;
// }

// const user: Usuario[] = [
//     { id: 'kg', autenticado: false },
//     { id: 'kg', autenticado: false, token: '123' },
//     { id: 'kg', autenticado: false },
//     { id: 'kg', autenticado: false, token: '123' },
//     { id: 'kg', autenticado: false },
// ];

// const state$ = from(user).pipe(
//     scan<Usuario>((acc, cur) => {
//         return { ...acc, ...cur }
//     }, { edad: 33 })
// );

// const id$ = state$.pipe(
//     map(state => state.id)
// );

// id$.subscribe( console.log );
