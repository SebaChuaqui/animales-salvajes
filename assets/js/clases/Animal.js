export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
            //Declaro variables en modalidad Clousure
            let Nombre = nombre;
            let Edad = edad;
            let Img = img;
            let Comentarios = comentarios;
            let Sonido = sonido;

            //generando gets
            this.getNombre = () => Nombre;
            this.getEdad = () => Edad;
            this.getImg = () => Img;
            this.getComentarios = () => Comentarios;
            this.getSonido = () => {
                return Sonido;
            }

            //generando sets
            this.setComentarios = (comentarios) => Comentarios = comentarios;

        }
        //generando métodos get y set
    get Nombre() {
        return this.getNombre();
    }
    get Edad() {
        return this.getEdad();
    }
    get Img() {
        return this.getImg();
    }
    get Comentarios() {
        return this.getComentarios();
    }
    get Sonido() {
        return this.getSonido();
    }

    set Comentarios(comentarios) {
        return this.setComentarios(comentarios);
    }
}

/*
Probando que la clase funciona 
console.log(new Animal('Oso', 33, '...', 'Maullar', 'Es tímido'));
*/