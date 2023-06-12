class Plataforma {
    private nombre: string;
    private perfilUsuario: persona;
    private listaPlanes: string[];
  
    constructor(nombre: string, perfilUsuario: persona) {
      this.nombre = nombre;
      this.perfilUsuario = perfilUsuario;
      this.listaPlanes = [];
    }
  
    public agregarPlan(plan: string): void {
      this.listaPlanes.push(plan);
    }
  
    public obtenerListaPlanes(): string[] {
      return this.listaPlanes;
    }
  }