"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacion = void 0;
const plataforma_js_1 = require("./plataforma.js");
class Aplicacion {
    constructor() {
        this.plataforma = [];
    }
    mostrarListadoPlataforma() {
        this.plataforma.forEach(e => console.log(e));
    }
    crearPlataforma(nuevaPlataforma) {
        let auxPlataforma = new plataforma_js_1.Plataforma(nuevaPlataforma.nombre, nuevaPlataforma.sitioWeb);
        this.plataforma.push(auxPlataforma);
    }
}
exports.Aplicacion = Aplicacion;
