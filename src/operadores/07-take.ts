import { of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5)

numeros$.pipe(
    take(4)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('completed')
})