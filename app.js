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

            function generarDatoAstrologico() {
                const random = Number.parseInt(Math.random() * arraySignos.length -1);
                document.querySelector('#fraseOutput').textContent = `"${arraySignos[random].dato.dato}"`;
                document.querySelector('#signoOutput').textContent = `${arraySignos[random].dato.signo}.-`;
            }