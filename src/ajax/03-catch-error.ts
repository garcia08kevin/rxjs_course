import { Observer, catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

const url = 'https://httpbissn.org/delay/1';
//const url = 'https://httpbin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error:err => console.warn('error: ' + err),
    complete: () => console.log('completado: '),
};

// const obs$ = ajax.getJSON(url,{
//     'Content-Type': 'application/json',
//     'mi-token': 'ABC123'
// }).pipe(
//     catchError(manejaError)
// );

// const obs1$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

// obs$.subscribe(resp => console.log('getJSON: ',resp));
// obs1$.subscribe(resp => console.log('ajax: ',resp));

obs$.subscribe(observer);
