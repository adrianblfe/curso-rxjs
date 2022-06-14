import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


// range(1, 5).pipe(
// 	map<number, string>( val => (val * 10).toString() )
// )
// .subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent >( document, 'keyup' );

const keyupKey$ = keyup$.pipe(
	map( event => event.key )
);

const keyupPluck$ = keyup$.pipe(
	pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
	map( () => 'Tecla presionada')
);

keyup$.subscribe(console.log );
keyupKey$.subscribe( key => console.log( 'map', key) );
keyupPluck$.subscribe( key => console.log( 'pluck', key) );
keyupMapTo$.subscribe( key => console.log( 'mapTo', key) );



