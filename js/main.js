// variables
const imagenes = ['img/foto01.jpg', 'img/foto02.jpg', 'img/foto03.jpg'];
let pagina = 1;
const objImg = document.querySelector('#imagen');
const btnAvanzar = document.querySelector('#avanzar');
const btnRetroceder = document.querySelector('#retroceder');
const templateCirculo = document.querySelector('#template-circulo').content.firstElementChild;
const circulos = document.querySelector('#circulos');
const btnParar = document.querySelector('#parar');
const btnIniciar = document.querySelector('#iniciar');
let intervalo = null;
const tiemporIntervaloSeg = 1;


// funciones

function activarPlay() {
    if(intervalo === null) {
        intervalo = setInterval(function () {
            avazanrFoto();
        }, tiemporIntervaloSeg * 1000);
    }
}

function detenerPlay() {
    clearInterval(intervalo);
    intervalo = null;
}

function cambiarPagina(nuevaPagina) {
    pagina = nuevaPagina;
    render();
}

 function avazanrFoto() {
    pagina = pagina + 1;
    if (imagenes.length + 1 <= pagina) {
        pagina = 1;
    }
    render();
 }

 function retrocederFoto() {
    pagina = pagina - 1;
    if(0 === pagina) {
        pagina = imagenes.length;
    }
    render();
 }

 function render() {
    objImg.setAttribute('src', imagenes[pagina - 1]);
    // ciculos de inidcativo
    circulos.textContent = '';
    imagenes.forEach(function (imagen, indice) {
        // creamos los circulos
        const nuevoCirculo = templateCirculo.cloneNode(true);
        nuevoCirculo.addEventListener('click', function() {
             cambiarPagina(indice + 1);
        });
        // marcamos el checked de los circulos
        if(pagina === indice + 1) {
            nuevoCirculo.setAttribute('checked', true);
        }
        // muestrame
        circulos.appendChild(nuevoCirculo);
    });
 }

// eventos
btnAvanzar.addEventListener('click', avazanrFoto);
btnRetroceder.addEventListener('click', retrocederFoto);
btnIniciar.addEventListener('click', activarPlay);
btnParar.addEventListener('click', detenerPlay);


// inicio
render()