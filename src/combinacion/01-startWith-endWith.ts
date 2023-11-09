import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1,2,3);

numeros$.pipe(
    //permite controlar que se desea emitir al inicio del observable (se puede enviar cualquier argumento)
    startWith(0),
    endWith(4)
).subscribe(console.log);