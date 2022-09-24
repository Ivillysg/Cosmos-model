import { UsuarioDT } from "../spec/dt/UsuarioDT";
import { IEmprestimoOps } from "../spec/prov/IEmprestimoOps";
import { IManager } from "../spec/prov/IManager";
import { ILimiteReq } from "../spec/req/ILimiteReq";

export class FacadeEmprestimoOps implements IEmprestimoOps {
  private manager: IManager;
  private intReq: ILimiteReq;

  /**
   * Se rendimento do cliente for maior que 1000
   * Emprestar 90% do limite de emprestimo
   * Caso contrario, retorna 0
   */
  constructor(manager: IManager) {
    this.manager = manager;
  }

  liberarEmprestimoAutomatico(client: UsuarioDT): number {
    let rendimento = client.rendimentos;

    if (rendimento > 1000) {
      this.intReq = this.manager.getRequiredInterface("ILimiteReq");
      let limite = this.intReq.estimarLimite(client);
      return limite * 0.9;
    }

    return 0;
  }
}

FacadeEmprestimoOps;
