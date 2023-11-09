import { asyncScheduler, interval } from 'rxjs';

const saludar = () => console.log('Hola Mundo');
const saludar2 = (mensaje) => console.log(mensaje);

//asyncScheduler.schedule(() => saludar2('Hola como estas'), 1000);
//asyncScheduler.schedule(saludar2, 1000, 'Kevin');

//No puede ser una funcion de flecha
const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state+1, 1000);
}, 3000 /*Intervalo de tiempo en el que se ejecuta */, 0 /* Valor a enviar */);


// setTimeout(() => {
//     subs.unsubscribe();
// }, 10000);

asyncScheduler.schedule(() => subs.unsubscribe(), 10000);
