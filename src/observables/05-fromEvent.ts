import { fromEvent} from 'rxjs'

// Eventos del DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: ({x, y}) => console.log(`Coordenada en X: ${x}, Coordenada en Y: ${y}`)
}

src1$.subscribe(observer);

src2$.subscribe(evento => {
    console.log(evento.key)
});
