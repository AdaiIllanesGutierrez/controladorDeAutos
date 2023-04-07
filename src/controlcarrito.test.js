import Matriz from "./crearmatriz";

describe("Controlador de Carrito", () => {
    it("Deberia recibir la dimension de la matriz", () => {
      expect(obtenerDimesion()).toEqual("3x3");
    });
  });
  