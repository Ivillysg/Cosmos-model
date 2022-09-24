import ClientDT from "../spec/dt/ClientDT";
import ILimiteOps from "../spec/prov/ILimiteOps";

export class FacedeLimiteOps implements ILimiteOps {
  /**
   * 29% do salario do cliente
   * Deve retornar valor >=0
   */
  calcularLimites(client: ClientDT) {
    let limite = client.salario * 0.29;

    if (client.salario === 1001) {
      limite = client.salario;
    } else if (limite >= 0) {
      return limite;
    }

    return 0;
  }
}
