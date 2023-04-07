import { Matriz } from "./classmatriz";

describe("Controlador de Carrito", () => {
    it("Deberia recibir la dimension de la matriz", () => {
      expect(new Matriz(3,3).obtenerDimesion()).toEqual("3x3");
    });
  });
  