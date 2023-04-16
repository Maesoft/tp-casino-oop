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
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this) || this;
        _this.numbers = [];
        _this.colors = [];
        for (var i = 0; i < 37; i++) {
            _this.numbers.push(i);
            if (i === 0)
                _this.colors.push("verde");
            if (i % 2 === 0)
                _this.colors.push("rojo");
            if (i % 2 === 1)
                _this.colors.push("negro");
        }
        return _this;
    }
    Ruleta.prototype.play = function () {
        console.log('Bienvenido al juego de la Ruleta!');
    };
    Ruleta.prototype.getCash = function () {
    };
    return Ruleta;
}(playgame_1.PlayGame));
exports.Ruleta = Ruleta;
var ruleta = new Ruleta();
