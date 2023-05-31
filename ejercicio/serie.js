"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const actor_js_1 = require("./actor.js");
const director_js_1 = require("./director.js");
class Serie {
    constructor(nombre, imagenRepresentativa) {
        this.nombre = nombre;
        this.imagenRepresentativa = imagenRepresentativa;
        this.actor = [];
        this.director = [];
        this.episodio = [];
    }
    mostrarDirectores() {
        this.director.forEach(e => console.log(e));
    }
    mostrarActories() {
        this.actor.forEach(e => console.log(e));
    }
    mostrarDetalleSerie() {
        console.log(`Nombre: ${this.nombre}, 
                     Imagen: ${this.imagenRepresentativa}`);
    }
    crearActor(nuevoActor) {
        let auxNuevoActor = new actor_js_1.Actor(nuevoActor.nombre, nuevoActor.fotografia, nuevoActor.descripcion);
        this.actor.push(auxNuevoActor);
    }
    crearDirector(nuevoDirector) {
        let auxNuevoDirector = new director_js_1.Director(nuevoDirector.nombre, nuevoDirector.fotografia, nuevoDirector.descripcion);
        this.director.push(auxNuevoDirector);
    }
}
exports.Serie = Serie;
