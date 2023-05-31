"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const serie_js_1 = require("./serie.js");
class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    mostrarListadoSerie() {
        this.series.forEach(e => console.log(e));
    }
    crearSerie(nuevaSerie) {
        let auxNuevaSerie = new serie_js_1.Serie(nuevaSerie.nombre, nuevaSerie.imagenRepresentativa);
        this.series.push(auxNuevaSerie);
    }
}
exports.Categoria = Categoria;
