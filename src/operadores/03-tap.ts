import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5).pipe(
    tap(x => console.log('antes ', x)),
    map(val => `El valor es: ${val*10}`),
    tap(x => console.log('despues ', x)),
    tap({
        next: x => console.log('suma ', x + 1),
        complete: () => console.log('Se completo todo') //util para depurar
    }),
);


numeros$.subscribe(val => console.log('subs', val))