import { Matriz } from "./classmatriz";
import { Coordenada } from "./classcoordenada";
import {insercion_Recorrido_del_Carro,MostrarPosInicial,MostrarMov,MostrarPosFinal} from "./crearmatriz";

describe("Controlador de Carrito", () => {
    it("Deberia recibir la dimension de la matriz", () => {
      expect(new Matriz(3,3).obtenerDimension()).toEqual("3x3");
    });
    it("Deberia recibir la posicion x de la coordenada", () => {
        expect(new Coordenada(2,3, "N").x).toEqual(2);
    });
    it("Deberia recibir la posicion y de la coordenada", () => {
        expect(new Coordenada(2,3, "N").y).toEqual(3);
    });
    it("Deberia recibir la posicion final del carro en la matriz", () => {
        expect(insercion_Recorrido_del_Carro("5,5/3,3N/A")[1][2]).toEqual(1);
    });

  });
  