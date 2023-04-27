"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BlackJack = void 0;
var playgame_1 = require("../ts/playgame");
var ReadlineSync = require("readline-sync");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack() {
        var _this = _super.call(this) || this;
        _this.dealerSum = 0;
        _this.yourSum = 0;
        _this.dealerAceCount = 0;
        _this.yourAceCount = 0;
        _this.amountOfCards = 2;
        return _this;
    }
    BlackJack.prototype.buildDeck = function () { };
    BlackJack.prototype.shuffleDeck = function () { };
    BlackJack.prototype.buildGame = function () { };
    BlackJack.prototype.playBlackJack = function () { };
    BlackJack.prototype.play = function (creditos) {
        console.clear();
        this.creditos = creditos;
        var rl = Number(ReadlineSync.question("---------------------------------\n  Bienvenido al juego de BlackJack! \n  ---------------------------------\n                \n  1) Jugar\n  2) Instrucciones\n  3) Volver al menu anterior\n  \n  ---------------------------------\n  Creditos: ".concat(this.creditos, "\n  \n  Seleccione una opcion: ")));
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
    };
    BlackJack.prototype.getCash = function () {
        return this.creditos;
    };
    return BlackJack;
}(playgame_1.PlayGame));
exports.BlackJack = BlackJack;
var dealerAceCount = 0;
var yourAceCount = 0;
var yourSum = 0;
var dealerSum = 0;
var deck;
var popCard;
var Instrucciones = "Al jugar se te otorgan 2 cartas las cuales cuentan con un valor, si se encuentran entre el 1 y el 10 tienen el mismo valor que el numero de la carta, luego estan las K, Q y J que tienen el valor de 10 y por ultimo el Az que tiene el valor de 11, el fin del juego es llegar al valor de 21 o quedar mas cerca que el contrincante, si te pasas pierdes. Suerte! y que disfrutes del Juego!";
/* Crea el Mazo */
function buildDeck() {
    var values = [
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
    var types = ["H", "D", "C", "S"];
    deck = [];
    for (var i = 0; i < types.length; i++) {
        for (var j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}
/* Mezcla el Mazo */
function shuffleDeck() {
    for (var i = 0; i < deck.length; i++) {
        var j = Math.floor(Math.random() * deck.length);
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}
function buildGame() {
    buildDeck();
    shuffleDeck();
    popCard = deck.pop();
    dealerSum += getValue(popCard);
    dealerAceCount += checkAce(popCard);
    console.log("El dealer suma la carta: " + popCard + "\n");
    console.log("La suma del Dealer es de: " + dealerSum);
    while (dealerSum < 17) {
        var card = deck.pop();
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
    for (var i = 0; i < 2; i++) {
        var card = deck.pop();
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
    }
    else {
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
    var data = card.split("-");
    var value = data[0];
    if (isNaN(value)) {
        if (value === "A") {
            value = 11;
        }
        else if (value === "J") {
            value = 10;
        }
        else if (value === "Q") {
            value = 10;
        }
        else if (value === "K") {
            value = 10;
        }
    }
    else {
        value = parseInt(value);
    }
    return value;
}
/*Cuenta de los ases recibido*/
function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    else {
        return 0;
    }
}
/* Agregar una carta adicional a la mano del jugador siempre que su puntaje sea menor a 17.  */
function hit() {
    buildDeck();
    shuffleDeck();
    if (yourSum < 17) {
        var card = deck.pop();
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        console.log("Te toco la carta: " + card);
        console.log("tu suma es: " + yourSum);
    }
    else {
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
                    var answer = ReadlineSync.question("Desea otra carta? (Si/No) ").toLowerCase();
                    switch (answer) {
                        case "Si":
                            hit();
                            if ((yourAceCount > 0 && yourSum > 21) || yourSum > 21) {
                                console.log("Perdiste.");
                                break;
                            }
                            else if (yourSum === 21) {
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
                    }
                    else if (yourSum > dealerSum && yourSum < 21) {
                        console.log("Ganaste");
                        break;
                    }
                    else if (yourSum == dealerSum) {
                        console.log("Empate, que bajon");
                        break;
                    }
                    else if (yourSum > 21 || (dealerSum > yourSum && dealerSum < 21)) {
                        console.log("Perdiste.");
                        break;
                    }
                    var playAgain = ReadlineSync.question("Quieres volver a jugar? (Si/No) ").toLowerCase();
                    if (playAgain === "no") {
                        console.log("Gracias por jugar! Vuelva pronto!");
                        return;
                    }
                    else if (playAgain === "si") {
                        resetGame();
                    }
                    else {
                        console.log("Para flaco, si o no...");
                    }
                }
        }
    }
}
