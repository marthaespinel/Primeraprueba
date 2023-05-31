"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
const categoria_js_1 = require("./categoria.js");
class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.categoria = [];
        this.plan = [];
    }
    mostrarListaCategorias() {
        this.categoria.forEach(e => console.log(e));
    }
    mostrarDetallePlataforma() {
        console.log(`Nombre: ${this.nombre}, 
                     Sitio Web: ${this.sitioWeb}`);
    }
    crearCategoria(nuevaCategoria) {
        let auxnuevaCategoria = new categoria_js_1.Categoria(nuevaCategoria.nombre);
        this.categoria.push(auxnuevaCategoria);
    }
}
exports.Plataforma = Plataforma;
