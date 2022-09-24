import { UsuarioDT } from "../dt/UsuarioDT";

export interface IEmprestimoOps {
  liberarEmprestimoAutomatico: (client: UsuarioDT) => number;
}
