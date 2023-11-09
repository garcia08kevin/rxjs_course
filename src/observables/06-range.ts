import { asyncScheduler, of, range } from 'rxjs'

//const src$ = of(1,2,3,4,5,6,7,8,9,10);
//si no se agrega un valor inicial este es de 0
//El segundo valor significa el numero de puestos que se movera 
//const src$ = range(1,10);

const src$ = range(1,10, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log)
console.log('fin');