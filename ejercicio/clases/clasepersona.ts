class persona {
    private nombre: string;
    private rol: string;
    private descripcion: string;
    private listaUsuarios: persona[];

    constructor(nombre: string, rol: string, descripcion: string) {
      this.nombre = nombre;
      this.rol = rol;
      this.descripcion = descripcion;
      this.listaUsuarios = [];
    }

    public agregarUsuario(usuario: persona): void {
      this.listaUsuarios.push(usuario);
    }

    public obtenerListaUsuarios(): persona[] {
      return this.listaUsuarios;
    }

    public perfilUsuario(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Rol: ${this.rol}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  }