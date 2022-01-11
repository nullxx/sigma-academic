import { IntermediateParams } from "./IntermediateParams";

export default interface DefaultParam extends IntermediateParams {
  multi: boolean;
  av?: string;
  avc?: string;
  sv?: string;
  os?: string;
  pais?: string;
  idioma?: string;
  token?: string;
}
