// uso comun forkJoin (llamada de api simultaneas usando ajax)

import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'garcia08kevin'

// si una llamada falla toa la respuesta sera un error
forkJoin({
    //  es necesario agregar un catch error para que solo lanze el error cada uno de los observables
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`).pipe(catchError(err => of(err.message))),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
    catchError(err => of(err.message))
).subscribe(console.log)