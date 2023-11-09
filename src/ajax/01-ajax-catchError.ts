import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

// const manejaErrores = (respose: Response) => {
//     if (!respose.ok) {
//         throw new Error(respose.statusText);
//     }
//     return respose;
// }

const manejaErrores = (err: AjaxError) => {
    console.log('Error', err)
    //Devuelve un arreglo vacio
    return of([])
}

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch(error => console.log('Hubo un error: ',error));

ajax(url).pipe(
    map(({ response }) => response),
    //atrapa errores en el observable y ejecuta una acccion
    catchError(manejaErrores)
).subscribe(console.log)