import * as ReadlineSync from "readline-sync";
import { PlayGame } from "./playgame";
import { Player } from "./player";

export class Dice extends PlayGame {
  private dice1: number;
  private dice2: number;
  private point: number | null;
  protected creditos: number;

  public constructor() {
    super();
  }

  public play(creditos: number): number {
    console.clear();
    this.creditos = creditos;
    let rl = Number(
      ReadlineSync.question(
        `---------------------------------
    Bienvenido al juego de Dados! 
    ---------------------------------
                  
    1) Jugar
    2) Instrucciones
    3) Volver al menu anterior
    
    ---------------------------------
    Creditos: ${this.creditos}
    
    Seleccione una opcion: `
      )
    );

    switch (rl) {
      case 1:
        this.playDice();
        break;
      case 2:
        console.clear();
        console.log(
          "El objetivo del juego es apostar por el resultado de dos dados.\n\nSi el lanzamiento de salida es 7 o 11, el jugador gana automáticamente.\n\nSi el lanzamiento de salida es 2, 3 o 12, el jugador pierde automáticamente.\n\nSi el lanzamiento de salida es cualquier otro número (4, 5, 6, 8, 9, o 10)\n, ese número se convierte en el 'punto' del jugador. El objetivo del jugador es ahora volver a tirar los dados y conseguir el mismo número antes de sacar un 7.\n\nSi el jugador saca un 7 antes de conseguir su punto, pierde.\n\nSi el jugador consigue su punto antes de sacar un 7, gana."
        );
        ReadlineSync.question("Presione una tecla para continuar.");
        this.play(this.creditos);
        break;
      case 3:
        console.clear();
        return this.creditos;
        break;

      default:
        break;
    }
    return this.creditos;
  }

  getCash(): number {
    return this.creditos;
  }

  private roll(): void {
    this.dice1 = Math.floor(Math.random() * 6) + 1;
    this.dice2 = Math.floor(Math.random() * 6) + 1;
  }

  private getSum(): number {
    return this.dice1 + this.dice2;
  }

  private playDice(): void {
    let isPlaying = true;
    while (isPlaying) {
      const choice = ReadlineSync.question(
        "Elige una opcion: \n1. Tirar Dado\n2. Salir\n"
      );

      switch (choice) {
        case "1":
          console.clear();
          this.roll();
          const sum = this.getSum();
          console.log(`Cayo el ${this.dice1} y el ${this.dice2}, Suma ${sum}`);

          if (this.point === null) {
            if (sum === 7 || sum === 11) {
              console.log("Felicidades, ganaste!");
            } else if (sum === 2 || sum === 3 || sum === 12) {
              console.log("Perdiste!");
            } else {
              console.log(
                `Tu puntaje es ${sum}, sigue tirando hasta que aciertes o saques un 7.`
              );
              this.point = sum;
            }
          } else {
            if (sum === this.point) {
              console.log("Felicidades, diste con tu puntaje!");
              this.point = null;
            } else if (sum === 7) {
              console.log(
                "Sacaste un 7 antes de llegar a tu punto y perdiste!"
              );
              this.point = null;
            } else {
              console.log(
                `Sumaste ${sum}, sigue tirando hasta que aciertes o caiga un 7.`
              );
            }
          }
          break;
        case "2":
          console.clear();
          console.log("Gracias por jugar!");
          isPlaying = false;
          break;
        default:
          console.log("Por favor decide las opciones anteriores...");
          break;
      }
    }
  }
}
