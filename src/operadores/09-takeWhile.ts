import { fromEvent, map, takeWhile } from "rxjs";



const click$ = fromEvent<PointerEvent >( document, 'click' );

click$.pipe(
	map( ({ x, y }) => ({ x, y }) ),
	// takeWhile( ({ y }) => y <= 150 )

	takeWhile( ({ y }) => y <= 150, true ) // El último parámetro(valor booleano), incluye el valor que hace concluir el subscribe
)
.subscribe({
	next: val => console.log( 'next:', val),
	complete: () => console.log( 'complete')
});

