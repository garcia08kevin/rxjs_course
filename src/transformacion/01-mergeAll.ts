import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsers } from "../interface/github-users";

const body = document.querySelector('body');
const url = 'https://api.github.com';

const textInput = document.createElement('input');
const orderList = document.createElement('ol'); //order list ol
body.append(textInput, orderList);

const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML= '';
    for( const usuario of usuarios){
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
    debounceTime(500),
    map<KeyboardEvent, Observable<GithubUsers>>(({ target }) => ajax.getJSON(`${url}/search/users?q=${target['value']}`)),
    // util para observable con varios hijos
    mergeAll<Observable<GithubUsers>>(),
    map<GithubUsers, GithubUser[]>(users => users.items)
).subscribe(mostrarUsuarios);

