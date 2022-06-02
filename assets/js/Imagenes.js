import Database from "./Data.js";

const animal = document.getElementById('animal');
const preview = document.getElementById('preview');

animal.addEventListener('change', async() => {
    const { animales } = await dataBase.getData();
    const nombreAnimal = animal.value;
    const animalElegido = animales.find(animal => animal.name == nombreAnimal);
    const animalImagen = animalElegido.imagen;
    const animalSelImg = `./assets/imgs/${animalImagen}`;
    creaImagen(animalSelImg);
})

const creaImagen = (path) => {
    preview.innerHTML = " ";
    preview.style.backgroundImage = `url(${path})`
}

export default {}