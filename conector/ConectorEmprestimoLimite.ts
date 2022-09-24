import { UsuarioDT } from "../emprestimo/spec/dt/UsuarioDT";
import ILimiteReq from "../emprestimo/spec/req/ILimiteReq";
import ILimiteOps from "../limite/spec/prov/ILimiteOps";
import ClienteDT from "../limite/spec/dt/ClienteDT";

class ConectorEmprestimoLimite implements ILimiteReq {
  private limiteOps: ILimiteOps;

  constructor(limiteOps: ILimiteOps) {
    this.limiteOps = limiteOps;
  }

  public estimarLimite(usuario: UsuarioDT): number {
    let cliente: ClienteDT = {
      salario: 0,
    };
    cliente.salario = usuario.rendimentos;
    return this.limiteOps.calcularLimites(cliente);
  }
}

export default ConectorEmprestimoLimite;
