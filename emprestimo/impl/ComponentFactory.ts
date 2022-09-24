import { IManager } from "../spec/prov/IManager";
import Manager from "./Manager";

export class ComponentFactory {
  private static manager?: IManager = undefined;

  private ComponentFactory() {
    // faz nada - SINGLETON
  }

  //FACTORY METHOD
  public static createInstance(): IManager | undefined {
    //SINGLETON
    if (this.manager) {
      this.manager = new Manager();
    }
    return this.manager;
  }
}
