"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var ReadlineSync = require("readline-sync");
var ruleta_1 = require("./ruleta");
var poker_1 = require("./poker");
var tragamoneda_1 = require("./tragamoneda");
var tragamonedaspro_1 = require("./tragamonedaspro");
var blackjack_1 = require("./blackjack");
var Casino = /** @class */ (function () {
    function Casino(player) {
        this.nombre = "Casino Virtual Las Flores";
        this.ruleta = new ruleta_1.Ruleta();
        this.blackjack = new blackjack_1.Blackjack();
        this.poker = new poker_1.Poker();
        this.tragamonedas = new tragamoneda_1.Tragamonedas();
        this.tragamonedasPro = new tragamonedaspro_1.TragamonedasPro();
        this.player = player;
    }
    Casino.prototype.newGame = function () {
        console.clear();
        if (this.player.getAge() > 17) {
            if (this.player.getAmount() > 0 && !isNaN(this.player.getAmount())) {
                this.menu();
            }
            else {
                console.log("No tiene creditos suficientes para jugar.");
            }
        }
        else {
            console.log("Debe ser mayor de edad para jugar en ".concat(this.getNombre(), "."));
        }
    };
    Casino.prototype.menu = function () {
        console.clear();
        console.log("\n********************************\n* BIENVENIDO AL CASINO VIRTUAL *\n********************************\nSeleccione una opcion:\n1) Blackjack \n2) Poker \n3) Ruleta \n4) Tragamonedas Tradicional \n5) Tragamonedas Progresiva  \n\n9) Salir\n\nCreditos: ".concat(this.player.getAmount(), "\n"));
        var rl = Number(ReadlineSync.question("Seleccione una opcion: "));
        switch (rl) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                console.clear();
                this.jugarRuleta();
                break;
            case 4:
                break;
            case 5:
                break;
            case 9:
                console.clear();
                console.log("Gracias por venir, vuelva pronto!");
                break;
            default:
                console.clear();
                console.log("Intruduzca una opcion valida.");
                break;
        }
    };
    Casino.prototype.jugarRuleta = function () {
        this.player.getAmount() > 0 ? this.player.setAmount(this.ruleta.play(this.player.getAmount())) : console.log("No tiene creditos suficientes para jugar.");
        this.menu();
    };
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    return Casino;
}());
exports.Casino = Casino;
