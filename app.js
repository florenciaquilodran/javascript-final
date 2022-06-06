//WOHOOO LO LOGREEEE =) ... AHORA SI ESTA ENTREGA ANDA A LA PERFECCIóN !

//Para este desafío utilicé un sweet alert que es lo que mas me gustó para interactuar en mi web. 


Swal.fire({
    title: 'Aprendamos sobre los Signos',     //Le puse un titulo
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',  //Tanto esta imagen como la de abajo no me estarian funcionando pero no se el por que 
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")             
        left top
        no-repeat
    `
    })



//Un array de signos

const datosAstrológicos = [

    {'signo': 'Aries', 
        'dato': 'Es el fuego que inicia, que irrumpe, que quema pronto y pronto se apaga. Furia, ira, actividad, acción.'
    },
    {'signo': 'Tauro', 
        'dato': 'La tranquilidad del hogar, mirar una pelicula en el sillón con una rica comida.'
    },
    {'signo': 'Géminis', 
        'dato': 'Alegría, diversión, estudiar de manera constante, tener muchos amigos por todos lados.'
    },
    {'signo': 'Cáncer', 
        'dato': 'La familia es lo primero, el cobijo fundamental, la Madre es lo mas importante.'
    },
    {'signo': 'Leo', 
        'dato': 'Soy el lider, el rey de la manada, todos me siguen de manera espontanea.'
    },
    {'signo': 'Virgo', 
        'dato': 'Necesito cuidar de manera meticulosa mi cuerpo, saber como actua.'
    },
    {'signo': 'Libra', 
        'dato': 'Equilibrio entre ambas partes, sere el mediador.'
    },
    {'signo': 'Escorpio', 
        'dato': 'Purgar. Sacar al exterior todo aquello que se pudre dentro mio. Renacer.'
    },
    {'signo': 'Sagitario', 
        'dato': 'Viajar, explorar, divertirme, hablar otros idiomas, ser maestro, el sabio.'
    },
    {'signo': 'Capricornio', 
        'dato': 'Trabajar dia y noche sin parar para lograr mis cometidos.'
    },
    {'signo': 'Piscis', 
        'dato': 'Amor total para con toda la humanidad.'
    },
];

function generarDatoAstrologico(){
    const random = Number.parseInt(Math.random()*datosAstrológicos.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${datosAstrológicos[random].dato}\"`;
    document.querySelector('#authorOutput').textContent = `-${datosAstrológicos[random].signo}`;
    
}

console.log(...datosAstrológicos); // He aqui un SPREAD tal como enseñaron en clase , donde a través de la consola vamos a poder ver el array con dichos "datos astrologicos"

fetch("/javascript.json")
.then( (response) => {
    return response.json();
}) .then( (generarDatoAstrologico) => (
    console.log(generarDatoAstrologico)
))