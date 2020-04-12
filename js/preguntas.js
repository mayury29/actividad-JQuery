
const rastreadorDeRespuesta = document.querySelector(".rastreador-respuesta");
const pregunta = document.querySelector(".preguntas");
const numeroPregunta = document.querySelector(".numero-value");
const totalPregunta = document.querySelector(".total-preguntas");
const acertadas = document.querySelector(".acertadas");
const total = document.querySelector(".total");
const porcentaje = document.querySelector(".porcentaje");
const op = document.querySelector(".opciones").children;
const op1 = document.querySelector(".opcion1");
const op2 = document.querySelector(".opcion2");
const op3 = document.querySelector(".opcion3");
const op4 = document.querySelector(".opcion4");
let preguntaIndex;
let calificacion=0;
let index = 0;
let myArray = [];
let myArr = [];
const preguntas = [
    {
        q: '¿Cuál es la capital de Colombia?',
        opciones: ['Medellin', 'Barranquilla', 'Bogota', 'Cali'],
        respuesta: 2
    },
    {
        q: 'Colombia posee costa sobre dos océanos, ¿cuáles son?',
        opciones: ['El Pacífico y el Atlántico.', 'El Pacífico y el Caribe.', 'El Atlántico y el Índico.', 'El Caribe y el Antártico.'],
        respuesta: 0
    },
    {
        q: ' ¿Cuántas regiones conforman la geografía colombiana?',
        opciones: ['4', '3', '5', '6'],
        respuesta: 3
    },
    {
        q: '¿A qué ciudad se le conoce como “La ciudad de la eterna primavera”?',
        opciones: ['Medellin', 'Barranquilla', 'Bogota', 'Cali'],
        respuesta: 0
    },
    {
        q: ' La moneda colombiana es:',
        opciones: ['El sucre', 'El sol', 'El peso', 'El Balboa'],
        respuesta: 2
    },
    {
        q: ' Al territorio colombiano lo atraviesa la cordillera de:',
        opciones: ['El Himalaya.', 'Los Andes.', 'Los Alpes.', 'Los Apalaches.'],
        respuesta: 1
    },
    {
        q: '¿Cuáles son los ritmos musicales colombianos más conocidos?',
        opciones: ['La bachata y el merengue.', 'La salsa y el chachachá.', 'El tango y la milonga.', 'El vallenato y la cumbia.'],
        respuesta: 3
    },
    {
        q: ' El premio Nobel colombiano, conocido por la novela “Cien años de soledad” se llama:',
        opciones: ['Gabriel García Márquez', 'Mario Vargas Llosa', 'Octavio Paz', 'Francisco José Cela'],
        respuesta: 0
    },
    {
        q: 'El pintor y escultor colombiano Fernando Botero es famoso por sus figuras:',
        opciones: ['Esqueléticas', 'Gordas', 'Hiperrealistas ', 'Abstractas'],
        respuesta: 1
    },

]


//seleccion de pregunta y opcion y numero
totalPregunta.innerHTML = preguntas.length;
function load() {
    numeroPregunta.innerHTML = index + 1;
    pregunta.innerHTML = preguntas[preguntaIndex].q;
    op1.innerHTML = preguntas[preguntaIndex].opciones[0];
    op2.innerHTML = preguntas[preguntaIndex].opciones[1];
    op3.innerHTML = preguntas[preguntaIndex].opciones[2];
    op4.innerHTML = preguntas[preguntaIndex].opciones[3];
    index++;
}








function preguntasaletarios() {
    let aleateria = Math.floor(Math.random() * preguntas.length);
    let duplicado = 0;
    let por = (calificacion / preguntas.length ) * 100;
    if (index == preguntas.length) {
      alert("Usted a finalizado este test con exito!!... usted acerto " + calificacion + " preguntas de " + preguntas.length
      + " su conocimiento acerca de colombia es de " + por + " % "
      
      );
      window.location.reload();
    
    }
    else {
        if (myArray.length > 0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == aleateria) {
                    duplicado = 1;
                    break;
                }
            }
            if (duplicado == 1) {
                preguntasaletarios();
            } else {
                preguntaIndex = aleateria;
                load();
            }
        }
        if (myArray.length == 0) {
            preguntaIndex = aleateria;
            load();
            myArr.push(preguntaIndex);
        }

        myArray.push(aleateria);

    }
}










function check(elemento) {
    if (elemento.id == preguntas[preguntaIndex].respuesta) {
        elemento.classList.add("correcto");
        editaRastreador("correcto")
        calificacion++
      

    } else {
        elemento.classList.add("incorrecto");
        editaRastreador("incorrecto")
    }
    desactivarOp();
}

function desactivarOp() {
    for (let i = 0; i < op.length; i++) {
        op[i].classList.add("desactivado");
        if (op[i].id == preguntas[preguntaIndex].respuesta) {
            op[i].classList.add("correcto");
        }
    }
}


function habilitarOp() {
    for (let i = 0; i < op.length; i++) {
        op[i].classList.remove("desactivado", "correcto", "incorrecto");


    }
}

function validar() {
    if (!op[0].classList.contains("desactivado")) {
        alert("por favor selecciones una opcion")
    } else {
        habilitarOp();
        preguntasaletarios();
    }
}



function siguiente() {
    validar();
}




function rastreadorrespuesta() {
    for (let i = 0; i < preguntas.length; i++) {
        const div = document.createElement("div")
        rastreadorDeRespuesta.appendChild(div);
    }
}

function editaRastreador(nombreClase) {
    rastreadorDeRespuesta.children[index - 1].classList.add(nombreClase);
}

window.onload = function () {
    preguntasaletarios();
    rastreadorrespuesta();
}


