import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales pretium dapibus. Etiam egestas ante nulla, a ultricies dui viverra eget. Donec gravida imperdiet vestibulum. Vestibulum venenatis erat et consequat consectetur. Nullam lacinia dolor augue, eget feugiat massa tempus et. Fusce a mattis lectus, non efficitur mi. Sed maximus tincidunt erat, ut maximus dolor facilisis quis. Integer fringilla lacus et lacus pharetra, at porta eros posuere. Ut laoreet odio quis erat feugiat, sed congue ante vehicula. Nam fringilla finibus arcu, nec cursus urna sodales eget. Mauris volutpat tortor a est consequat ultricies.
<br /><br />
Morbi sem justo, eleifend sed urna nec, egestas vulputate libero. Aliquam quis odio commodo, maximus neque et, rutrum orci. Maecenas id libero tortor. Nam fermentum id odio eu vulputate. Curabitur lorem neque, tincidunt id ligula in, euismod blandit mauris. Proin lectus tortor, consequat ac pellentesque id, sodales eu mi. Donec erat neque, accumsan quis luctus eget, aliquet non nulla. Mauris mattis dignissim aliquet. Mauris nec cursus massa, non scelerisque lacus. Duis vel risus turpis. Vestibulum enim quam, commodo vel dui et, consequat gravida erat. Ut at cursus nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pharetra a purus sed rhoncus.
<br /><br />
Fusce magna mauris, tincidunt faucibus congue eget, varius sed ex. Curabitur ullamcorper vestibulum urna maximus accumsan. Nulla suscipit, sapien sit amet vehicula laoreet, sem orci volutpat leo, non laoreet est mauris ut neque. Curabitur tincidunt, justo non convallis tristique, tellus felis pharetra quam, sit amet pulvinar eros justo a massa. Suspendisse vestibulum, turpis ac semper semper, diam lorem lacinia sem, nec ornare turpis dui vitae leo. Aenean semper neque faucibus tellus varius, quis vestibulum nisi viverra. Sed id suscipit erat. Quisque faucibus, elit ut ornare consectetur, nunc est ullamcorper turpis, nec vestibulum eros dolor id nunc. Vestibulum eu ligula quam. Sed sapien felis, cursus nec ligula eget, dapibus accumsan libero. Aliquam finibus eros et iaculis ornare.
<br /><br />
Nulla et nisi nisi. Curabitur lacinia urna efficitur velit fermentum imperdiet. Aenean sem nisi, feugiat id elementum ullamcorper, placerat in ligula. Vivamus quis vulputate purus. Etiam iaculis dolor vel enim dignissim, id rutrum odio hendrerit. Mauris lectus nisi, accumsan non maximus ultrices, posuere ac magna. In vel tellus id felis bibendum mattis. Pellentesque efficitur leo sem, ut ultrices est iaculis sed. Quisque varius in tortor ac tempus. Aliquam dapibus purus eget dapibus volutpat. Proin in libero id neque volutpat consequat et vitae sem. Morbi eget erat quis metus lacinia tristique. Pellentesque sodales iaculis neque ut consectetur. Etiam pulvinar fringilla justo, vel fringilla elit feugiat id.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Morbi sem justo, eleifend sed urna nec, egestas vulputate libero. Aliquam quis odio commodo, maximus neque et, rutrum orci. Maecenas id libero tortor. Nam fermentum id odio eu vulputate. Curabitur lorem neque, tincidunt id ligula in, euismod blandit mauris. Proin lectus tortor, consequat ac pellentesque id, sodales eu mi. Donec erat neque, accumsan quis luctus eget, aliquet non nulla. Mauris mattis dignissim aliquet. Mauris nec cursus massa, non scelerisque lacus. Duis vel risus turpis. Vestibulum enim quam, commodo vel dui et, consequat gravida erat. Ut at cursus nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pharetra a purus sed rhoncus.
<br /><br />
Fusce magna mauris, tincidunt faucibus congue eget, varius sed ex. Curabitur ullamcorper vestibulum urna maximus accumsan. Nulla suscipit, sapien sit amet vehicula laoreet, sem orci volutpat leo, non laoreet est mauris ut neque. Curabitur tincidunt, justo non convallis tristique, tellus felis pharetra quam, sit amet pulvinar eros justo a massa. Suspendisse vestibulum, turpis ac semper semper, diam lorem lacinia sem, nec ornare turpis dui vitae leo. Aenean semper neque faucibus tellus varius, quis vestibulum nisi viverra. Sed id suscipit erat. Quisque faucibus, elit ut ornare consectetur, nunc est ullamcorper turpis, nec vestibulum eros dolor id nunc. Vestibulum eu ligula quam. Sed sapien felis, cursus nec ligula eget, dapibus accumsan libero. Aliquam finibus eros et iaculis ornare.
<br /><br />
Nulla et nisi nisi. Curabitur lacinia urna efficitur velit fermentum imperdiet. Aenean sem nisi, feugiat id elementum ullamcorper, placerat in ligula. Vivamus quis vulputate purus. Etiam iaculis dolor vel enim dignissim, id rutrum odio hendrerit. Mauris lectus nisi, accumsan non maximus ultrices, posuere ac magna. In vel tellus id felis bibendum mattis. Pellentesque efficitur leo sem, ut ultrices est iaculis sed. Quisque varius in tortor ac tempus. Aliquam dapibus purus eget dapibus volutpat. Proin in libero id neque volutpat consequat et vitae sem. Morbi eget erat quis metus lacinia tristique. Pellentesque sodales iaculis neque ut consectetur. Etiam pulvinar fringilla justo, vel fringilla elit feugiat id.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
<br /><br />
Phasellus eleifend nisi dolor. Quisque at velit lectus. Duis quis ante non mi porta egestas. Nulla facilisi. Sed eget tellus eget purus condimentum ornare. Nullam dui augue, fringilla ac consectetur iaculis, vestibulum id sem. In maximus rutrum turpis non sollicitudin. Ut quis consectetur eros. Nulla tempor nisl eu fermentum varius. Praesent vestibulum sollicitudin justo ac auctor. Pellentesque in purus ut sapien dapibus aliquam. Suspendisse volutpat non purus nec mollis. Morbi felis augue, venenatis fringilla condimentum sed, eleifend quis ex.
`;



const body = document.querySelector('body');
body.append( texto );


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
	const {
		scrollTop,
		scrollHeight,
		clientHeight
	} = event.target.documentElement;

	return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
	
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe( console.log );


const progress$ = scroll$.pipe(
	map( calcularPorcentajeScroll ),
	tap( console.log )
);

progress$.subscribe( porcentaje => {
	progressBar.style.width = `${ porcentaje }%`;
});




