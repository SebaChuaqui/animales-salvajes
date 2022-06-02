import { Animal, Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/Investigacion.js";
import Imagenes from "./Imagenes.js";
import getSonidoAnimal from "./Sonidos.js";

const animalesElegidos = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');
const tablaAnimales = document.getElementById('Animales');

btnRegistrar.addEventListener("click", async(evento) => {
    evento.preventDefault();
    const imagenBack = document.getElementById('preview').style.backgroundImage;
    const urlImg = imagenBack.slice(5, imagenBack.length -2);

    if(validando(nombre, edad, comentarios, urlImg)){
        if(nombre.value === 'Aguila'){
            nombre.value = 'Aguila'
        }

    const srcSonidoAnimal = `./assets/sounds/${await getSonidoAnimal(nombre.value)}`

    switch (nombre.value){
        
    }
    }
})

