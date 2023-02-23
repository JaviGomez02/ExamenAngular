export class User {
        "usuario": Usuario;
        "token": string;
}

export interface Usuario {
          "rol": string;
          "estado": boolean;
          "nombre": string;
          "correo": string;
          "uid": string;
}