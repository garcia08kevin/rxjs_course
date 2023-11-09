import { interval, reduce, take } from "rxjs";

//reduce en javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);

interval(1000).pipe(
    take(3), //completa el observable despues de la cantidad especificada,
    reduce(totalReducer,5) //funcion acumuladora, el segundo valor es el punto desde donde inicia la acumulacion (acumulacion + numero)
).subscribe({
    next: val => { console.log('next: ', val) },
    complete: () => console.log('Complete')
})