import { UsuarioDT } from "../dt/UsuarioDT";

interface ILimiteReq {
  estimarLimite: (usuario: UsuarioDT) => number;
}

export default ILimiteReq;
