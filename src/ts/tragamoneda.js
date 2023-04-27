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
exports.Tragamonedas = void 0;
var playgame_1 = require("./playgame");
var ReadlineSync = require("readline-sync");
var fs = require("fs");
var probabilidades = fs.readFileSync("../txt/slot.txt", "utf-8");
var mensajeSinCredito = "No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar.";
var mensajeOpcioninvalida = "Ingrese una opcion valida. \nPresione 'Enter' para continuar.";
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(cantRodillos, elementosRodillo) {
        var _this = _super.call(this) || this;
        _this.cantRodillos = cantRodillos;
        _this.elementosRodillo = elementosRodillo;
        return _this;
    }
    Tragamonedas.prototype.play = function (creditos) {
        this.creditos = creditos;
        console.clear();
        console.log("\n--------------------------------------\n|  \uD83C\uDF40\uD83C\uDF40\uD83C\uDF40  SLOT GOODLUCK  \uD83C\uDF40\uD83C\uDF40\uD83C\uDF40  |\n--------------------------------------\n|1) Tirar Palanca                    |\n|2) Probabilidades y Premios         |\n|                                    |\n|                                    |\n|3) Volver al menu principal         |\n|                                    |\n|                                    |\n|------------------------------------|\n Creditos: ".concat(this.creditos, "          \n|------------------------------------|"));
        var rl = Number(ReadlineSync.question("Seleccione una opcion: "));
        switch (rl) {
            case 1:
                this.creditos > 0 ? this.tirarPalanca() : ReadlineSync.question(mensajeSinCredito);
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
    Tragamonedas.prototype.getCash = function () {
        return this.creditos;
    };
    Tragamonedas.prototype.tirarPalanca = function () {
        var premio = 0;
        this.creditos--;
        console.clear();
        var resultado = [];
        var aleatorio = 0;
        for (var i = 0; i < this.cantRodillos; i++) {
            aleatorio = Math.floor(Math.random() * this.elementosRodillo.length);
            resultado.push(this.elementosRodillo[aleatorio]);
        }
        console.log("\n        ________________\n        |Slot  GOODLUCK|\n        ****************  @\n        | ".concat(resultado.join(" | "), " | //\n        ****************//\n        |______________|"));
        premio = this.comprobarPremio(resultado);
        this.creditos += premio;
        ReadlineSync.question("Presione 'Enter' para continuar.");
        this.play(this.creditos);
    };
    Tragamonedas.prototype.comprobarPremio = function (array) {
        var premio = 0;
        if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3] && array[3] === array[4] && array[4] === array[5]) {
            premio = 15000;
            console.log("Esto es casi imposible!! ganaste 15.000 creditos!!");
            return premio;
        }
        else if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3] && array[3] === array[4]) {
            premio = 3000;
            console.log("Guaaaaauuu! acert\u00F3 5 combinaciones! ganaste 3.000 creditos.");
            return premio;
        }
        else if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3]) {
            premio = 500;
            console.log("Increible!!! ganaste 500 creditos.");
            return premio;
        }
        else if (array[0] === array[1] && array[1] === array[2]) {
            premio = 30;
            console.log("Genial!! ganaste 30 creditos.");
            return premio;
        }
        else if (array[0] === array[1]) {
            premio = 2;
            console.log("Felicidades ganaste 2 creditos.");
            return premio;
        }
        return 0;
    };
    return Tragamonedas;
}(playgame_1.PlayGame));
exports.Tragamonedas = Tragamonedas;
