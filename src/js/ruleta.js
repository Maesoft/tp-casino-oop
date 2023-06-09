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
exports.Ruleta = void 0;
var playgame_1 = require("./playgame");
var ReadlineSync = require("readline-sync");
var fs = require("fs");
var instrucciones = fs.readFileSync("../txt/instruccionesRuleta.txt", "utf-8");
var probabilidades = fs.readFileSync("../txt/probabilidadesRuleta.txt", "utf-8");
var mensajeSinCredito = "No tiene creditos suficientes para jugar. \nPresione 'Enter' para continuar.";
var mensajeOpcioninvalida = "Ingrese una opcion valida. \nPresione 'Enter' para continuar.";
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this) || this;
        _this.colors = [];
        for (var i = 0; i < 37; i++) {
            if (i === 0)
                _this.colors.push("Verde");
            if (i % 2 === 0)
                _this.colors.push("Rojo");
            if (i % 2 === 1)
                _this.colors.push("Negro");
        }
        _this.resetApuesta();
        return _this;
    }
    Ruleta.prototype.play = function (creditos) {
        console.clear();
        this.creditos = creditos;
        var rl = Number(ReadlineSync.question("---------------------------------\nBienvenido al juego de la Ruleta! \n---------------------------------\n                \n1) Realizar apuesta\n2) Instrucciones\n3) Probabilidades\n4) Volver al menu principal\n\n---------------------------------\nCreditos: ".concat(this.creditos, "\n\nSeleccione una opcion: ")));
        switch (rl) {
            case 1:
                console.clear();
                this.creditos > 0 ? this.apuesta() : ReadlineSync.question(mensajeSinCredito);
                break;
            case 2:
                console.clear();
                console.log(instrucciones);
                ReadlineSync.question("Presione 'Enter' para continuar.");
                this.play(this.creditos);
                break;
            case 3:
                console.clear();
                console.log(probabilidades);
                ReadlineSync.question("Presione 'Enter' para continuar.");
                this.play(this.creditos);
                break;
            case 4:
                console.clear();
                break;
            default:
                ReadlineSync.question(mensajeOpcioninvalida);
                this.play(this.creditos);
                break;
        }
        return this.creditos;
    };
    Ruleta.prototype.getCash = function () {
        return this.creditos;
    };
    Ruleta.prototype.apuesta = function () {
        console.clear();
        this.resetApuesta();
        var rl = Number(ReadlineSync.question("Desea apostar un pleno?\n        \n1)Si\n2)No\n \n3)Volver al menu principal\n \n \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                console.clear();
                rl = Number(ReadlineSync.question("Ingrese el numero que desea apostar al pleno\n                     \n                              \n                 Ingrese un numero del 0 al 36: "));
                if (rl >= 0 && rl < 37) {
                    this.pleno = rl;
                    this.creditos--;
                }
                else {
                    console.clear();
                    ReadlineSync.question(mensajeOpcioninvalida);
                    this.apuesta();
                    return;
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                break;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a pares?\n                     \n1)Si\n2)No\n              \n3)Volver al menu principal\n              \n              \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.pares = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a impares?\n                     \n1)Si\n2)No\n              \n3)Volver al menu principal\n              \n              \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.impares = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
                break;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a rojo?\n                      \n1)Si\n2)No\n               \n3)Volver al menu principal\n               \n               \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.rojo = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a negro?\n                      \n1)Si\n2)No\n               \n3)Volver al menu principal\n               \n               \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.negro = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a menores?\n                      \n1)Si\n2)No\n               \n3)Volver al menu principal\n               \n               \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.menores = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        rl = Number(ReadlineSync.question("Desea apostar a mayores?\n                      \n1)Si\n2)No\n               \n3)Volver al menu principal\n               \n               \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                if (this.creditos > 0) {
                    this.mayores = true;
                    this.creditos--;
                }
                else {
                    ReadlineSync.question(mensajeSinCredito);
                    console.clear();
                }
                break;
            case 2:
                break;
            case 3:
                this.cancelarApuesta();
                return;
            default:
                console.clear();
                ReadlineSync.question(mensajeOpcioninvalida);
                this.apuesta();
                break;
        }
        console.clear();
        console.log("Comienza a girar la ruleta...");
        this.girarRuleta();
    };
    Ruleta.prototype.girarRuleta = function () {
        var premio = 0;
        var nroGanador = Math.round(Math.random() * 36);
        var colorGanador = this.colors[nroGanador];
        var parImpar = "Impar";
        var menorMayor = "Menor";
        if (nroGanador % 2 === 0)
            parImpar = "Par";
        if (nroGanador > 18)
            menorMayor = "Mayor";
        console.log("\n        \u00A1El numero ganador es el ".concat(nroGanador, "! ").concat(colorGanador, ", ").concat(parImpar, ", ").concat(menorMayor, "\n        \n        "));
        var rl = ReadlineSync.question("Presione 'Enter' para continuar.");
        console.clear();
        if (nroGanador === this.pleno) {
            premio += 36;
            console.log("Felicidades gano 36 creditos, acerto un pleno!");
        }
        if (colorGanador === "Rojo" && this.rojo === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Rojo!");
        }
        if (colorGanador === "Negro" && this.negro === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Negro!");
        }
        if (parImpar === "Impar" && this.impares === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Impar!");
        }
        if (parImpar === "Par" && this.pares === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Par!");
        }
        if (menorMayor === "Menor" && this.menores === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Menor!");
        }
        if (menorMayor === "Mayor" && this.mayores === true) {
            premio += 2;
            console.log("Felicidades gano 2 creditos, acerto al Mayor!");
        }
        if (premio > 0) {
            console.log("Usted gano en esta jugada ".concat(premio, " creaditos."));
            this.creditos += premio;
        }
        else {
            console.log("No tuvo suerte, no pudo acertar ninguna apuesta.\n            \n            ");
        }
        ReadlineSync.question("Presione 'Enter' para continuar.");
        console.clear();
        this.resetApuesta();
    };
    Ruleta.prototype.resetApuesta = function () {
        this.pleno = -1;
        this.pares = false;
        this.impares = false;
        this.rojo = false;
        this.negro = false;
        this.mayores = false;
        this.menores = false;
    };
    Ruleta.prototype.cancelarApuesta = function () {
        if (this.pleno > -1)
            this.creditos++;
        if (this.pares)
            this.creditos++;
        if (this.impares)
            this.creditos++;
        if (this.rojo)
            this.creditos++;
        if (this.negro)
            this.creditos++;
        if (this.menores)
            this.creditos++;
        if (this.mayores)
            this.creditos++;
        console.clear();
        this.resetApuesta();
        this.play(this.creditos);
    };
    return Ruleta;
}(playgame_1.PlayGame));
exports.Ruleta = Ruleta;
