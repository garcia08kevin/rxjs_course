import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5).pipe(
    //map esta recibiendo un number y devolviendo un number
    map<number, string>(val => `El valor es: ${val * 10}`)
).subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyUp$.pipe(
    map(({ key }) => `La tecla pulsada es: ${key}`)
).subscribe(console.log);

const keyupPluck$ = keyUp$.pipe(
    //Recuperar data de una propiedad especifica de un objeto (target.baseUrl)
    pluck('target', 'baseURI')
).subscribe(console.log);

const keyupMapTo$ = keyUp$.pipe(
    //Devuelve el mensaje o el valor ingresado cuando se lanza la subscripcion
    mapTo<string>('Tecla presionada',)
).subscribe(console.log);