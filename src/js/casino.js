"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var ReadlineSync = require("readline-sync");
var ruleta_1 = require("./ruleta");
var poker_1 = require("./poker");
var tragamoneda_1 = require("./tragamoneda");
var tragamonedaspro_1 = require("./tragamonedaspro");
var blackjack_1 = require("./blackjack");
var mensajeSinCredito = "No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar.";
var mensajeOpcioninvalida = "Ingrese una opcion valida. \nPresione 'Enter' para continuar.";
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
                console.log(mensajeSinCredito);
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
                this.jugarRuleta();
                break;
            case 4:
                this.jugarTragamoneda();
                break;
            case 5:
                break;
            case 9:
                console.clear();
                console.log("Gracias por venir, vuelva pronto!");
                break;
            default:
                console.clear();
                console.log(mensajeOpcioninvalida);
                this.menu();
                break;
        }
    };
    Casino.prototype.jugarRuleta = function () {
        console.clear();
        if (this.player.getAmount() > 0) {
            this.ruleta.play(this.player.getAmount());
            this.player.setAmount(this.ruleta.getCash());
        }
        else {
            console.log(mensajeSinCredito);
        }
        this.menu();
    };
    Casino.prototype.jugarTragamoneda = function () {
        console.clear();
        if (this.player.getAmount() > 0) {
            this.tragamonedas.play(this.player.getAmount());
            this.player.setAmount(this.tragamonedas.getCash());
        }
        else {
            console.log(mensajeSinCredito);
        }
        this.menu();
    };
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    return Casino;
}());
exports.Casino = Casino;