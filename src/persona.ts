class Persona implements Persona{
    private nombre: string = '';

    constructor(nombre?: string) {
        if (nombre) {
            this.nombre = nombre;
        }
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }
}