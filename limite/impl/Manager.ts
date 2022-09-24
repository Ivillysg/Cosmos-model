import { IManager } from "../spec/prov/IManager";
import { FacedeLimiteOps } from "./FacadeLimiteOps";

class Manager implements IManager {
  private providedInterfaces: Object;
  private requiredInterfaces: Object;

  //Constructor
  constructor() {
    this.providedInterfaces = {};
    this.requiredInterfaces = {};

    //add interfaces
    this.requiredInterfaces["ILimiteReq"] = new FacedeLimiteOps();
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
