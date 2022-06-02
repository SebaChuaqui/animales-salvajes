import dataBase from "./Data.js";

const getSonidoAnimal = async(animal) => {
    const { animales } = await dataBase.getData();
    const { sonido } = await animales.find(e => e.name === animal)
    return sonido;
}

export default getSonidoAnimal