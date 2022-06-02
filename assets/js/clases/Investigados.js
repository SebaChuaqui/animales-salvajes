import { Animal } from "./Animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

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

    Grunir() {
        this.getSonido();
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear() {
        this.getSonido();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar() {
        this.getSonido();
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };