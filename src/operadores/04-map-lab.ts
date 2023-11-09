import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra ultricies diam. Nunc ac semper enim, id porttitor turpis. Fusce et nibh vitae augue fringilla aliquet vel a elit. Ut justo est, lacinia non tincidunt vel, lobortis varius orci. Cras diam quam, vehicula quis imperdiet et, rhoncus ac est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam in blandit nulla. Sed interdum id turpis a auctor. Integer enim arcu, porttitor ut sollicitudin ac, faucibus non tortor. Vestibulum fringilla est vehicula, pulvinar elit non, faucibus tortor. Pellentesque at ante sagittis, elementum lorem quis, commodo ipsum. Etiam sagittis sapien ut aliquet suscipit.
    <br></br>    
    Nulla venenatis consequat metus, ac egestas nunc sodales eget. Aenean hendrerit bibendum magna, eu eleifend nunc eleifend vitae. Nullam tincidunt enim in nulla auctor aliquet. Maecenas vitae nulla ultricies, hendrerit sem vitae, pretium ipsum. Donec a eros vitae augue semper cursus placerat vel eros. Praesent tempor nulla sed lorem pellentesque, non tempor nulla aliquet. Praesent dictum rutrum nibh, a aliquam justo efficitur vitae. Quisque sed nisi ut lacus dapibus faucibus. Nunc ut magna non lorem pellentesque scelerisque nec a nisi. Vestibulum vel nibh a augue imperdiet dictum. Fusce sed bibendum turpis, ac cursus quam. Morbi non est cursus, dignissim nunc ac, venenatis nunc. In vulputate porttitor leo a bibendum.
    <br></br>
    Integer fringilla pretium purus, vel pharetra ipsum tristique vitae. Vivamus leo purus, gravida id vestibulum ut, suscipit vel dolor. Phasellus diam mi, dignissim sed magna a, vulputate laoreet nunc. Quisque vel vulputate mauris. Ut in odio at lacus efficitur molestie et vitae tellus. Aliquam turpis lorem, molestie nec ipsum in, consectetur ultricies metus. Vivamus sit amet varius eros. Praesent volutpat tempor dignissim. Ut consectetur id sapien vitae faucibus. Sed vel rutrum turpis. Ut placerat tincidunt mi, sed rutrum tellus porttitor ut. Praesent non purus iaculis leo tincidunt fringilla ut in felis. Suspendisse a tellus vitae odio consequat tempus. Pellentesque non lacus a nibh placerat posuere a vitae tortor. Donec fringilla interdum ante vel commodo. In ornare, leo a aliquam maximus, orci metus volutpat enim, vel sollicitudin ex massa ac tellus.
    <br></br>
    Nulla facilisi. Duis tincidunt blandit leo nec mollis. Sed at tortor pretium, iaculis elit ac, pretium lacus. Ut varius vehicula sapien. Donec fermentum pretium arcu non vehicula. Maecenas tellus nunc, suscipit eu odio et, hendrerit mollis est. Vestibulum in semper neque. Nunc non molestie leo, viverra placerat arcu. Aenean rutrum arcu venenatis sagittis gravida. Praesent et fermentum leo, sodales consequat ex.
    <br></br>    
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
    Donec nisi nunc, aliquet non mauris eu, aliquam pretium eros. Nunc blandit euismod eros quis rhoncus. Curabitur at arcu aliquet, accumsan mi in, gravida orci. Proin sed eros nec mi porta congue. Nulla elementum venenatis libero, quis aliquam sapien tristique nec. Morbi id aliquet purus. Ut vel cursus dui, sed euismod eros. Aliquam lacinia tellus lorem, eget volutpat nulla mattis at. Nulla tincidunt enim orci, vel condimentum dolor lobortis eu. Curabitur condimentum, lorem gravida ornare viverra, turpis sem imperdiet velit, sit amet vestibulum ipsum magna ut dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius consectetur lectus quis tempor. Aliquam auctor ligula sit amet vehicula elementum. Donec eleifend vehicula lacus et pharetra.
    <br></br>
`;

const body = document.querySelector('body');
body.append(texto);

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');

body.append(progressbar);

const scroll$ = fromEvent<Event>(document, 'scroll')//.subscribe(console.log);

const calcularPorcentaje = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    // console.log({scrollTop}, {scrollHeight}, {clientHeight})
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progress$ = scroll$.pipe(
    map(calcularPorcentaje)
)

progress$.subscribe(percent => {
    progressbar.style.width = `${percent}%`
})