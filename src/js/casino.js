"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var ReadlineSync = require("readline-sync");
var ruleta_1 = require("../ts/ruleta");
var dice_1 = require("../ts/dice");
var tragamoneda_1 = require("../ts/tragamoneda");
var tragamonedaspro_1 = require("../ts/tragamonedaspro");
var blackjack_1 = require("../ts/blackjack");
var mensajeSinCredito = "No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar.";
var mensajeOpcioninvalida = "Ingrese una opcion valida. \nPresione 'Enter' para continuar.";
var Casino = /** @class */ (function () {
    function Casino(player) {
        this.nombre = "Casino Virtual Las Flores";
        this.ruleta = new ruleta_1.Ruleta();
        this.blackjack = new blackjack_1.BlackJack();
        this.dice = new dice_1.Dice();
        this.tragamonedas = new tragamoneda_1.Tragamonedas(3, [
            "🍒",
            "🍍",
            "🍊",
            "🍋",
            "🍌",
            "🍉",
        ]);
        this.tragamonedasPro = new tragamonedaspro_1.TragamonedasPro(5, [
            "🍀",
            "🎲",
            "🃏",
            "🎁",
            "👻",
            "💰",
        ]);
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
                this.jugarBlackJack();
                break;
            case 2:
                this.jugarDice();
                break;
            case 3:
                this.jugarRuleta();
                break;
            case 4:
                this.jugarTragamoneda();
                break;
            case 5:
                this.jugarTragamonedaPro();
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
    Casino.prototype.jugarDice = function () {
        console.clear();
        if (this.player.getAmount() > 0) {
            this.dice.play(this.player.getAmount());
            this.player.setAmount(this.dice.getCash());
        }
        else {
            console.log(mensajeSinCredito);
        }
        this.menu();
    };
    Casino.prototype.jugarBlackJack = function () {
        console.clear();
        if (this.player.getAmount() > 0) {
            this.blackjack.play(this.player.getAmount());
            this.player.setAmount(this.blackjack.getCash());
        }
        else {
            console.log(mensajeSinCredito);
        }
        this.menu();
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
    Casino.prototype.jugarTragamonedaPro = function () {
        console.clear();
        if (this.player.getAmount() > 3) {
            this.tragamonedasPro.play(this.player.getAmount());
            this.player.setAmount(this.tragamonedasPro.getCash());
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
