"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("ejercicio");
const actor_js_1 = require("./actor.js");
const aplicacion_js_1 = require("./aplicacion.js");
const categoria_js_1 = require("./categoria.js");
const director_js_1 = require("./director.js");
const episodio_js_1 = require("./episodio.js");
const cost_js_1 = require("./cost.js");
const plataforma_js_1 = require("./plataforma.js");
const serie_js_1 = require("./serie.js");
let objAplicacion = new aplicacion_js_1.Aplicacion();
// Objetos genericos
let objPlataforma = new plataforma_js_1.Plataforma("", "");
let objPlan = new cost_js_1.Plan(0);
let objCategoria = new categoria_js_1.Categoria("");
let objSerie = new serie_js_1.Serie("", "");
let objEpisodio = new episodio_js_1.Episodio("", "", 0);
let objActor = new actor_js_1.Actor("", "", "");
let objDirector = new director_js_1.Director("", "", "");
// Implementacion de creacion de Plataformas
objPlataforma.nombre = "Netflix";
objPlataforma.sitioWeb = "https://www.netflix.com/";
objAplicacion.crearPlataforma(objPlataforma);
objPlataforma.nombre = "Disney+";
objPlataforma.sitioWeb = "https://www.disneyplus.com/";
objAplicacion.crearPlataforma(objPlataforma);
objPlataforma.nombre = "HBO Max";
objPlataforma.sitioWeb = "https://www.hbomax.com/";
objAplicacion.crearPlataforma(objPlataforma);
// Mostrar Lista Aplicacion
objAplicacion.mostrarListadoPlataforma();
// Implementacion de creacion de Plataformas
objCategoria.nombre = "Accion";
objAplicacion.plataforma[0].crearCategoria(objCategoria);
objCategoria.nombre = "Drama";
objAplicacion.plataforma[1].crearCategoria(objCategoria);
objCategoria.nombre = "Comedia";
objAplicacion.plataforma[2].crearCategoria(objCategoria);
// Mostrar Lista Categoria
objAplicacion.plataforma[0].mostrarListaCategorias();
// Implementacion de creacion de Serie
objSerie.nombre = "Good Doctor";
objAplicacion.plataforma[0].categoria[0].crearSerie(objSerie);
objSerie.nombre = "Dr Who";
objAplicacion.plataforma[0].categoria[0].crearSerie(objSerie);
// Mostrar Lista Serie
objAplicacion.plataforma[0].categoria[0].mostrarListadoSerie;
// Implementacion de Plan
objPlan.precio = 39900;
objAplicacion.plataforma[0].plan[0] = objPlan;
// Implementacion de creacion Episodios
objEpisodio.nombre = "Episodio 1";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 2";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 3";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 4";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
objEpisodio.nombre = "Episodio 5";
objAplicacion.plataforma[0].categoria[0].series[0].episodio[0] = objEpisodio;
// Implementacion de creacion Actor a una serie
objActor.nombre = "Adam Sandler";
objActor.fotografia = ":)";
objActor.descripcion = "Reconocido Actor...";
objAplicacion.plataforma[0].categoria[0].series[0].crearActor(objActor);
// Implementacion de creacion Director a una serie
objDirector.nombre = "Spielberg";
objDirector.fotografia = ":)";
objDirector.descripcion = "Reconocido Director...";
objAplicacion.plataforma[0].categoria[0].series[0].crearDirector(objDirector);
// Mostrar Objeto Aplicacion
console.log(objAplicacion);
