import ClienteDT from "../dt/ClienteDT";

interface ILimiteOps {
  calcularLimites: (cliente: ClienteDT) => number;
}

export default ILimiteOps;
