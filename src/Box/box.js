//Logic of the box -- Singleton

//Objeto Box

//importamos el módulo MrMeeseeks
const SingleMrMeeseeks = require('../Meeseks/mr_meeseks');

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

Box.prototype.createMeeseeks = function() {
    if (!this.mrMeeseeks) {
        this.mrMeeseeks = SingleMrMeeseeks.get();
    }
}

//Generador de Box (Singleton)

var generate = (function SingleBox() {

    const boxInstance = new Box();

    return {
        get: function get() {
            return boxInstance;
        }
    }
})();

//exportamos el singleton

exports.SingleBox = generate;