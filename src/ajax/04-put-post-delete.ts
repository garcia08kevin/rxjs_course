import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post(url, {
    id: 1,
    nombre: 'Kevin'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);

ajax.put(url, {
    id: 1,
    nombre: 'Kevin'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);

ajax.delete(url, {
    'mi-token': 'ABC123'
}).subscribe(console.log);

//Peticion personalizada

ajax({
    url,
    method: 'GET', //PUT, POST, DELETE
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Kevin'
    }
}).subscribe(console.log);