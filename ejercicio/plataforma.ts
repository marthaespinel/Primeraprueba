import { Categoria } from "./categoria.js";
import { cost } from "./cost.js";

export class Plataforma{
    nombre: string
	sitioWeb: string
	categoria: Categoria[]
	plan: cost[]
    constructor(nombre: string,sitioWeb: string){
        this.nombre=nombre
        this.sitioWeb=sitioWeb
        this.categoria=[]
        this.plan=[]
    }
    mostrarListaCategorias():void{
        this.categoria.forEach(e=>console.log(e))
    }
    mostrarDetallePlataforma():void{
        console.log(`Nombre: ${this.nombre}, 
                     Sitio Web: ${this.sitioWeb}`)
    }
    crearCategoria(nuevaCategoria:Categoria){
        let auxnuevaCategoria = new Categoria(nuevaCategoria.nombre)
        this.categoria.push(auxnuevaCategoria)
    }
}