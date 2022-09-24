import { IManager } from "../spec/prov/IManager";
import FacadeEmprestimoOps from "./FacedeEmprestimoOps";

class Manager implements IManager {
  private providedInterfaces: Object;
  private requiredInterfaces: Object;

  //Constructor
  constructor() {
    this.providedInterfaces = {};
    this.requiredInterfaces = {};

    //add interfaces
    this.providedInterfaces["IEmprestimoOps"] = new FacadeEmprestimoOps(this);
    this.requiredInterfaces["ILimiteReq"] = null;
  }

  getProvidedInterfaces(): string[] {
    return Object.keys(this.providedInterfaces);
  }
  getRequiredInterfaces() {
    return Object.keys(this.providedInterfaces);
  }
  getProvidedInterface(interfaceName: string) {
    return this.providedInterfaces[interfaceName];
  }
  getRequiredInterface(interfaceName: string) {
    return this.requiredInterfaces[interfaceName];
  }
  setRequiredInterface(interfaceName: string, interfaceObject: Object) {
    return (this.requiredInterfaces[interfaceName] = interfaceObject);
  }
}

export default Manager;
