export interface IManager {
  getProvidedInterfaces: () => Array<string>;
  getRequiredInterfaces: () => Array<string>;
  getProvidedInterface: (interfaceName: string) => any;
  setRequiredInterface: (
    interfaceName: string,
    interfaceObject: Object
  ) => void;
  getRequiredInterface: (interfaceName: string) => any;
}
