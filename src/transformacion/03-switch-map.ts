import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsers } from "../interface/github-users";

const body = document.querySelector('body');
const url = 'https://api.github.com';

const textInput = document.createElement('input');
const orderList = document.createElement('ol'); //order list ol
body.append(textInput, orderList);

const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = usuario.avatar_url;
        image.alt = usuario.login;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';
        li.append(image);
        li.append(usuario.login + ' ');
        li.append(anchor);
        body.append(li);
    }
}

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),    
    mergeMap<KeyboardEvent, Observable<GithubUsers>>(({ target }) => ajax.getJSON(`${url}/search/users?q=${target['value']}`)),        
    map<GithubUsers, GithubUser[]>(users => users.items)
)//.subscribe(mostrarUsuarios);

const url2 = 'https://httpbin.org/delay/1?arg=';


// input$.pipe(
//     map(({target}) => target['value']),
//     map( texto => ajax.getJSON(url2 + texto)),
//     mergeAll()
// ).subscribe(console.log);

//switchMap permite disparar un observable y al momento de emitir una nueva peticion completa las peticiones anteiores

input$.pipe(
    map(({target}) => target['value']),
    switchMap( texto => ajax.getJSON(url2 + texto)),    
).subscribe(console.log);