export interface GetMarks {
  multicliente?: string;
  perfilActivo: string;
  registrationID?: string;
  token?: string;
}
export interface Calificacion {
  tipoAsignatura: string;
  creditos: number;
  asignatura: string;
  calificacion: string;
  codCalificacion: string;
  presentaExamen: boolean;
  superada: boolean;
  time: any;
  timeRevision: number;
  convocatoria: string;
  numConvocatoria: number;
  nota: number;
  provisional: boolean;
  lugarRevision: string;
  horaRevision: string;
  anoAcademico: string;
  anoAcademicoNum: number;
  semestre: number;
  idAsignatura: number;
}

export interface ListaResultado {
  planDescripcion: string;
  centroDescripcion: string;
  estudioDescripcion: string;
  creditosSuperados: number;
  creditosTotalesPlan: number;
  calificaciones: Calificacion[];
  idExpediente: number;
}

export interface GetMarksResponse {
  listaResultados: ListaResultado[];
  error: number;
}
