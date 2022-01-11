export interface Login {
  usuario: string;
  password: string;
}

export interface LoginResponseService {
  serviceName: "CALENDAR" | "ENCUESTAS" | "HOME" | "SAMOV";
}

export interface LoginResponsePerfil {
  clavePerfil: string;
  descripcionPerfil: string;
  idUsuario: string;
  identificado: boolean;
  servicios: LoginResponseService[];
}

export interface LoginResponse {
  token: string;
  urlDefault: string;
  perfiles: LoginResponsePerfil[];
  errorCode: number;
  mensajeError?: string;
}
