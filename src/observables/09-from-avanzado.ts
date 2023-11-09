import {of, from, Observer, async} from 'rxjs';

//of: genera secuencias
// from crea observables con arryas, promise, observable, etc

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error:error => console.warn('error: ' + error),
    complete: () => console.log('completado [obs]:'),
};


// const source$ = from([1,2,3,4,5,6])
// const source1$ = of([1,2,3,4,5,6])

// source$.subscribe(observer);
// source1$.subscribe(observer);

const source$ = from(fetch('https://api.github.com/users/klerith'))

// source$.subscribe(async(resp) => {
//     const data = await resp.json();
//     console.log(data);
// })

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 5;
    yield 6;
}

const miIterable = miGenerador();

// for(let data of miIterable){
//     console.log(data);
// }

from(miIterable).subscribe(observer);