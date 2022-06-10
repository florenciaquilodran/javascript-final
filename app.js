

// Entrega final de Javascript - CoderHouse año 2022, mes junio. Comisión 30335. Profesor : Rodrigo Río del Val.
// Alumna : Florencia Quilodrán


//Sweet Alert con Swal Fire

Swal.fire({
    title: 'Aprendamos sobre los Signos',     
    width: 600,
    padding: '3em',
    color: '#716add',
    })

// Clase constructora 
class objetoSigno {
    constructor(id, dato) {
        this.id = id;
        this.dato = dato;
    };
}

//Array de signos astrológicos, los mismos alojados en el archivo javascript.json.

const arraySignos = [  

]


// Fetch , linkeado a mi repositorio de Github dentro de él podemos ver además de las variables un ciclo for en donde pusheamos las frases.

fetch("https://florenciaquilodran.github.io/javascript-final/javascript.json")
    .then((response) => response.json())
    .then((data) => {
        let entradasKeys = Object.keys(data);
        let entradasValue = Object.values(data);
        for (let i = 0; i < entradasKeys.length; i++) {
            arraySignos.push(new objetoSigno(entradasKeys[i], entradasValue[i]));            
        }
    });

// En esta función a través del random me eligirá una frase de forma aleatoria que cada vez que se clickee el botón expresado en el html funcionará

let signoSeleccionado,
    datoSignoSeleccionado;

        function generarDatoAstrologico() {
        const random = Number.parseInt(Math.random() * arraySignos.length -1);
        signoSeleccionado = arraySignos[random].dato.signo;
        datoSignoSeleccionado = arraySignos[random].dato.dato;

        document.querySelector('#fraseOutput').textContent = `"${datoSignoSeleccionado}"`;
        document.querySelector('#signoOutput').textContent = `${signoSeleccionado}.-`;
            } 


// En esta función se puede guardar lo que salió del signo y asignarlo a un nombre de alguien que conozcamos

let nombrePersonaInput = document.querySelector("#uname");

const botonGuardarPersona = document.querySelector("#botonGuardarPersona");
botonGuardarPersona.addEventListener("click", () => {
    localStorage.setItem(`${nombrePersonaInput.value}`, JSON.stringify(`${signoSeleccionado}: ${datoSignoSeleccionado}`));
});



// para mostrar los nombres y sus signos guardados del localStorage

const botonMostrarHistorial = document.querySelector("#botonMostrarHistorial");
let contenidoModal = document.querySelector("#contenidoModal");

 const mostrarNombresGuardados = () => {
    let nombresCompleto = [];
    keysNombres = Object.keys(localStorage);
    valuesNombres= Object.values(localStorage);
    i = keysNombres.length;
    contenidoModal.innerHTML=``;

    for (let index = 0; index < i; index++) {
        nombresCompleto.push({"nombre":keysNombres[index], "signo":valuesNombres[index]});
    }

    nombresCompleto.forEach(nombre => {
        contenidoModal.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${nombre.nombre}</h5>
          <p class="card-text">${nombre.signo}</p>
        </div>
      </div>`;

    })
}

botonMostrarHistorial.addEventListener("click", mostrarNombresGuardados);