import { Animal } from "./Animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //método para esta clase hija
    Rugir() {
        this.getSonido();
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //método para esta clase hija
    Aullar() {
        this.getSonido();
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //método para esta clase hija
    Grunir() {
        this.getSonido();
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //método para esta clase hija
    Sisear() {
        this.getSonido();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    //método para esta clase hija
    Chillar() {
        this.getSonido();
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };