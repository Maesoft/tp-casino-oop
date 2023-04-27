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
exports.TragamonedasPro = void 0;
var tragamoneda_1 = require("./tragamoneda");
var ReadlineSync = require("readline-sync");
var fs = require("fs");
var probabilidades = fs.readFileSync("../txt/slot2.txt", "utf-8");
var mensajeSinCredito = "No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar.";
var mensajeOpcioninvalida = "Ingrese una opcion valida. \nPresione 'Enter' para continuar.";
var TragamonedasPro = /** @class */ (function (_super) {
    __extends(TragamonedasPro, _super);
    function TragamonedasPro(cantRodillos, elementosRodillo) {
        var _this = _super.call(this, cantRodillos, elementosRodillo) || this;
        _this.cantLineas = 3;
        _this.jackpot = 300;
        return _this;
    }
    TragamonedasPro.prototype.play = function (creditos) {
        this.creditos = creditos;
        console.clear();
        console.log("\n--------------------------------------\n|  \uD83C\uDF40\uD83C\uDF40\uD83C\uDF40  SLOT GOODLUCK  \uD83C\uDF40\uD83C\uDF40\uD83C\uDF40  |\n--------------------------------------\n|1) Tirar Palanca                    |\n|2) Probabilidades y Premios         |\n|                                    |\n|                                    |\n|3) Volver al menu principal         |\n|                                    |\n|                                    |\n|------------------------------------|\n Creditos: ".concat(this.creditos, "          \n|------------------------------------|"));
        var rl = Number(ReadlineSync.question("Seleccione una opcion: "));
        switch (rl) {
            case 1:
                this.creditos > 3 ? this.tirarPalanca() : ReadlineSync.question(mensajeSinCredito);
                break;
            case 2:
                console.clear();
                console.log(probabilidades);
                ReadlineSync.question("Presione 'Enter' para continuar.");
                this.play(this.creditos);
                break;
            case 3:
                console.clear();
                break;
            default:
                ReadlineSync.question(mensajeOpcioninvalida);
                this.play(this.creditos);
                break;
                break;
        }
    };
    TragamonedasPro.prototype.tirarPalanca = function () {
        var premio = 0;
        this.creditos -= 3;
        console.clear();
        var resultado1 = [];
        var resultado2 = [];
        var resultado3 = [];
        var aleatorio = 0;
        for (var i = 0; i < this.cantRodillos; i++) {
            aleatorio = Math.floor(Math.random() * this.elementosRodillo.length);
            resultado1.push(this.elementosRodillo[aleatorio]);
            aleatorio = Math.floor(Math.random() * this.elementosRodillo.length);
            resultado2.push(this.elementosRodillo[aleatorio]);
            aleatorio = Math.floor(Math.random() * this.elementosRodillo.length);
            resultado3.push(this.elementosRodillo[aleatorio]);
        }
        console.log("\n        __________________________\n        |        SLOT 777        |\n        *************************|    @\n        | ".concat(resultado1.join(" | "), " |  //\n        | ").concat(resultado2.join(" | "), " | //\n        | ").concat(resultado3.join(" | "), " |//\n        **************************/\n        |________________________|\n        "));
        premio += this.comprobarPremio(resultado1);
        premio += this.comprobarPremio(resultado2);
        premio += this.comprobarPremio(resultado3);
        premio += this.comprobarJackpot(resultado1);
        premio += this.comprobarJackpot(resultado2);
        premio += this.comprobarJackpot(resultado3);
        this.creditos += premio;
        ReadlineSync.question("    Presione 'Enter' para continuar.");
        this.play(this.creditos);
    };
    TragamonedasPro.prototype.comprobarJackpot = function (array) {
        var premio = 0;
        if (array[0] === "🍀" && array[1] === "🍀" && array[2] === "🍀" && array[3] === "🍀" && array[4] === "🍀") {
            premio = this.jackpot;
            console.log("\u00A1\u00A1\u00A1Felicidades has ganado el JACKPOT!!! Has ganado ".concat(this.creditos, " creditos."));
        }
        return premio;
    };
    return TragamonedasPro;
}(tragamoneda_1.Tragamonedas));
exports.TragamonedasPro = TragamonedasPro;
