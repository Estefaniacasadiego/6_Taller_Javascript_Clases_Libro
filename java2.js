class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = false;
    }

    marcarComoLeido() {
        this.leido = true;
    }

    marcarComoNoLeido() {
        this.leido = false;
    }

    informacion() {
        const leidoStr = this.leido ? "Sí" : "No";
        console.log('Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${leidoStr}');
      }
    }

const libro1 = new Libro("Nombre Constante libro No1", "autor Libro No1", "genero Libro No1");
const libro2 = new Libro("Nombre Constante libro No2", "autor Libro No2", "genero Libro No2");

function marcarComoLeido(numeroLibro) {
    if (numeroLibro === 1) {
        libro1.marcarComoLeido();
        document.getElementById("leido1").textContent = "Sí";
    } else if (numeroLibro === 2) {
        libro2.marcarComoLeido();
        document.getElementById("leido2").textContent = "Sí";
    }
}

// Mostrar la información de ambos libros en la consola
console.log(libro1.informacion());
console.log(libro2.informacion());
