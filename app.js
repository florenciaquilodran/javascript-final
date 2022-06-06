//WOHOOO LO LOGREEEE =) ... AHORA SI ESTA ENTREGA ANDA A LA PERFECCIóN !

//Para este desafío utilicé un sweet alert que es lo que mas me gustó para interactuar en mi web. 


Swal.fire({
    title: 'Aprendamos sobre los Signos',     //Le puse un titulo
    width: 600,
    padding: '3em',
    color: '#716add',
    })



//Un array de signos

class objetoSigno {
    constructor(id, dato) {
        this.id = id;
        this.dato = dato;
    };
}

const arraySignos = [
    

]
fetch("https://florenciaquilodran.github.io/javascript-final/javascript.json")
    .then((response) => response.json())
    .then((data) => {
        let entradasKeys = Object.keys(data);
        let entradasValue = Object.values(data);
        for (let i = 0; i < entradasKeys.length; i++) {
            arraySignos.push(new objetoSigno(entradasKeys[i], entradasValue[i]));            
        }
    });

            function generarDatoAstrologico() {
                const random = Number.parseInt(Math.random() * arraySignos.length -1);
                document.querySelector('#fraseOutput').textContent = `-${arraySignos[random].dato.dato}-`;
                document.querySelector('#signoOutput').textContent = `-${arraySignos[random].dato.signo}-`;
            }