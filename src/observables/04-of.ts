import { of } from 'rxjs'
//manda un mismo valor
//const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8);

//manda varios 
const obs$ = of([1,2], {a:1,b:2}, function(){}, true);

obs$.subscribe(next =>
    console.log('next: ',next),
    null,
    () => console.log('Terminamos')
);