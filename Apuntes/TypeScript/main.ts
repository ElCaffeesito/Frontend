interface Credenciales {
    email: string;
    password: string;
}

const acceso: Credenciales = {
    email: '',
    password: ''
}

interface IPersona {
    setNombre: (n:string) => void;
    getNombre: () => string;
}

const yo = new Persona();
yo.setNombre('Juan');
yo.getNombre();