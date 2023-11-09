// Crear de formulario

import { catchError, exhaustMap, fromEvent, map, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//Helper
const peticionLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map(({ response }) => response['token']),
    catchError(() => of('Credenciales incorrectas'))
);

//Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    //evita refresh de la pantalla
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    exhaustMap(peticionLogin),

).subscribe(console.log)
