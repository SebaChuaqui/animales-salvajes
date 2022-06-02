import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Investigados.js";
import Imagenes from "./Imagenes.js";
import getSonidoAnimal from "./Sonidos.js";

const animalesSeleccionados = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');;
const tablaAnimales = document.getElementById('Animales')

btnRegistrar.addEventListener('click', async(evento) => {
    evento.preventDefault();
    const imgBack = document.getElementById('preview').style.backgroundImage;
    const urlImg = imgBack.slice(5, imgBack.length - 2);
    if (validador(nombre, edad, comentarios, urlImg)) {

        if (nombre.value === 'Águila') {
            nombre.value = 'Aguila'
        }
        const srcSonidoAnimal = `./assets/sounds/${await getSonidoAnimal(nombre.value)}`
        let animal;

        switch (nombre.value) {
            case 'Leon':
                animal = new Leon(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Lobo':
                animal = new Lobo(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break
            case 'Oso':
                animal = new Oso(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Serpiente':
                animal = new Serpiente(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Aguila':
                animal = new Aguila(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
        }

        // console.log(animal);
        animalesSeleccionados.push(animal)
            // console.log(animalesSeleccionados);
        crearCards(animalesSeleccionados);
        limpiarForm(nombre, edad, comentarios, imgBack);
        crearModal(animalesSeleccionados);

    } else {
        alert('Por favor completar todos los datos del animal')
    }

})

const validador = (nombre, edad, comentarios, urlImg) => {
    if ((nombre.value !== "" && nombre.value !== 'Seleccione un animal') && (edad.value !== "" && edad.value !== 'Seleccione un rango de años') && comentarios.value !== "" && urlImg !== "") {
        return true;
    } else {
        return false;
    }
}

const limpiarForm = (nombre, edad, comentarios, imgBack) => {
    nombre.value = "Seleccione un animal"
    edad.value = "Seleccione un rango de años"
    comentarios.value = ""
    const defaultImgBg = document.getElementById('preview')
    defaultImgBg.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}

const crearCards = (listaAnimales) => {
    tablaAnimales.innerHTML = ''
        // console.log(listaAnimales);
    listaAnimales.forEach((animal, i) => {
        // console.log(animal);
        // console.log(i);
        tablaAnimales.innerHTML +=
            /*HTML*/
            `
            <div class="card text-white bg-secondary m-3">
            <img type ="button "style="width: 10rem;" src="${animal.Img}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#${animal.Nombre}-${i}">
            <div class="card-body p-1" onclick="playSounds('${animal.Sonido}')">
            <a href="#"><img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/></a>
            </div>
            </div>
            `
    });
}

window.playSounds = (sound) => {
    const sonido = new Audio(sound);
    sonido.play();
}

const crearModal = (listaAnimales) => {
    const modal = document.getElementById('modal');
    modal.innerHTML = "";
    listaAnimales.forEach((animal, i) => {
        console.log('acá estoy entrando al crearModal')
        console.log(animal);
        console.log(i);
        console.log(animal.Nombre);
        console.log(animal.Edad);
        console.log(animal.Comentarios);
        modal.innerHTML +=
            `
        <!-- Modal ${animal.Nombre} - ${i} -->
        <div class="modal fade" id="${animal.Nombre}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered w-25 role=document">
            <div class="modal-content bg-dark text-white">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${animal.Nombre}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="${animal.Img}" class="img-fluid">
                <hr>
                <h5>Edad</h5>
                <p>${animal.Edad}</p>
                <hr>
                <h5>Comentarios</h5>
                <p>${animal.Comentarios}</p> 
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
            </div>
        </div>
        </div>
        `
    })

}