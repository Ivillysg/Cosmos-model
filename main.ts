import ConectorEmprestimoLimite from "./conector/ConectorEmprestimoLimite";
import { ComponentFactory as ComponentFactoryLimite } from "./limite/impl/ComponentFactory";
import { ComponentFactory as ComponentFactoryEmprestimo } from "./emprestimo/impl/ComponentFactory";
import { UsuarioDT } from "./emprestimo/spec/dt/UsuarioDT";

class Main {
  constructor() {
    let managerLimite = ComponentFactoryLimite.createInstance();

    let limiteReqImp = new ConectorEmprestimoLimite(
      managerLimite?.getProvidedInterface("ILimiteOps")
    );

    let managerEmp = ComponentFactoryEmprestimo.createInstance();

    managerEmp?.setRequiredInterface("ILimiteReq", limiteReqImp);

    let empOps = managerEmp?.getProvidedInterface("IEmprestimoOps");

    let usuarioDT: UsuarioDT = {
      rendimentos: 0,
    };

    usuarioDT.rendimentos = 1000.56;

    console.log(empOps.liberarEmprestimoAutomatico(usuarioDT));
  }
}

new Main();
