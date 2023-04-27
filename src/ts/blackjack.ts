import { PlayGame } from "./playgame";
import * as ReadlineSync from "readline-sync";

export class BlackJack extends PlayGame {
  private dealerSum: number = 0;
  private yourSum: number = 0;
  private dealerAceCount: number = 0;
  private yourAceCount: number = 0;
  private amountOfCards: number = 2;
  protected creditos: number;
  protected currentAward: number;
  buildDeck(): void {}
  shuffleDeck(): void {}
  buildGame(): void {}
  playBlackJack(): void {}

  public constructor() {
    super();
  }

  public play(creditos: number): number {
    console.clear();
    this.creditos = creditos;
    let rl = Number(
      ReadlineSync.question(
        `---------------------------------
  Bienvenido al juego de BlackJack! 
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
        playBlackJack();
        break;
      case 2:
        console.clear();
        console.log(Instrucciones);
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
}

let dealerAceCount = 0;
let yourAceCount = 0;
let yourSum = 0;
let dealerSum = 0;
let deck;
let popCard;
let Instrucciones =
  "Al jugar se te otorgan 2 cartas las cuales cuentan con un valor, si se encuentran entre el 1 y el 10 tienen el mismo valor que el numero de la carta, luego estan las K, Q y J que tienen el valor de 10 y por ultimo el Az que tiene el valor de 11, el fin del juego es llegar al valor de 21 o quedar mas cerca que el contrincante, si te pasas pierdes. Suerte! y que disfrutes del Juego!";

/* Crea el Mazo */

function buildDeck(): void {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let types = ["H", "D", "C", "S"];
  deck = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + types[i]);
    }
  }
}

/* Mezcla el Mazo */

function shuffleDeck(): void {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function buildGame(): void {
  buildDeck();
  shuffleDeck();
  popCard = deck.pop();
  dealerSum += getValue(popCard);
  dealerAceCount += checkAce(popCard);
  console.log("El dealer suma la carta: " + popCard + "\n");
  console.log("La suma del Dealer es de: " + dealerSum);
  while (dealerSum < 17) {
    let card = deck.pop();
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    console.log("El dealer suma la carta: " + card);
    console.log("La suma del Dealer es de: " + dealerSum);
  }

  if (dealerSum > 21) {
    console.log("El Dealer pierde!");
  }

  if (dealerSum == 21) {
    console.log("F#!$, el Dealer gana");
  }

  for (let i = 0; i < 2; i++) {
    let card = deck.pop();
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    console.log("Sumas la carta " + card);
    console.log("Tu suma es de " + yourSum);
  }

  if ((yourAceCount || yourSum) > 21) {
    console.log("Pierdes.");
  }

  if (yourSum == 21) {
    console.log("Felicidades, Ganaste");
  }

  if (yourSum < 17) {
    return console.log("Te recomiendo pedir otra carta...");
  } else {
    if (yourSum >= 17 && yourSum < dealerSum) {
      return console.log("Detente! No lo hagas Goku!");
    }
    if (yourSum > dealerSum && yourSum <= 21) {
      return console.log("Tu ganas!");
    }
  }
}

/* Toma la carta y devuelve el valor */

function getValue(card) {
  let data = card.split("-");
  let value = data[0];

  if (isNaN(value)) {
    if (value === "A") {
      value = 11;
    } else if (value === "J") {
      value = 10;
    } else if (value === "Q") {
      value = 10;
    } else if (value === "K") {
      value = 10;
    }
  } else {
    value = parseInt(value);
  }

  return value;
}

/*Cuenta de los ases recibido*/

function checkAce(card) {
  if (card[0] == "A") {
    return 1;
  } else {
    return 0;
  }
}

/* Agregar una carta adicional a la mano del jugador siempre que su puntaje sea menor a 17.  */

function hit() {
  buildDeck();
  shuffleDeck();
  if (yourSum < 17) {
    let card = deck.pop();
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    console.log("Te toco la carta: " + card);
    console.log("tu suma es: " + yourSum);
  } else {
    console.log("No puedes pedir otra carta!.");
  }
}

/* Resetea el juego */

function resetGame() {
  yourSum = 0;
  yourAceCount = 0;
  dealerSum = 0;
  dealerAceCount = 0;
}

/* Crea la interface para jugar */

function playBlackJack() {
  while (true) {
    buildGame();
    switch (true) {
      case yourAceCount + yourSum > 21:
        console.log("Perdiste.");
        break;
      case yourSum === 21:
        console.log("Felicidades, Ganaste!.");
        break;
      default:
        while (true) {
          const answer = ReadlineSync.question(
            "Desea otra carta? (Si/No) "
          ).toLowerCase();
          switch (answer) {
            case "Si":
              hit();
              if ((yourAceCount > 0 && yourSum > 21) || yourSum > 21) {
                console.log("Perdiste.");
                break;
              } else if (yourSum === 21) {
                console.log("Felicidades, Ganaste!.");
                break;
              }
              break;
            case "No":
              console.log("Te plantaste.");
              break;
            default:
              console.log("So vivo vo?");
              break;
          }

          if (dealerSum > 21) {
            console.log("El Dealer se fue al pasto, te toca");
            break;
          } else if (yourSum > dealerSum && yourSum < 21) {
            console.log("Ganaste");
            break;
          } else if (yourSum == dealerSum) {
            console.log("Empate, que bajon");
            break;
          } else if (yourSum > 21 || (dealerSum > yourSum && dealerSum < 21)) {
            console.log("Perdiste.");
            break;
          }

          const playAgain = ReadlineSync.question(
            "Quieres volver a jugar? (Si/No) "
          ).toLowerCase();
          if (playAgain === "no") {
            console.log("Gracias por jugar! Vuelva pronto!");
            return;
          } else if (playAgain === "si") {
            resetGame();
          } else {
            console.log("Para flaco, si o no...");
          }
        }
    }
  }
}
