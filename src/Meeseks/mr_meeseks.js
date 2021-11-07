//State of original MrMeeseks

function MrMeeseks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meee!";
    this.messageOnRequest = ["Oooh yeah! Can do!",
                             "Yes sireeee!",
                             "Oh, yeah!, Yes, ma'am!"];
}




//patrón Singleton para el MrMeeseeks original
var generate = (function SingletonMrMeeseks() {
    //creamos un nuevo objeto MrMeeseks dentro de la función
    var prototipo = new MrMeeseks();
    //esta funcion devuelve un getter de la instancia creada antes -> prototipo

    return {
        get: function() {
            return prototipo;
        }
    };
})();
/**
 * Hacemos de la función un IIFE para provocar la ejecución de esta y asegurar el
 * estado del prototipo de esta primera instancia.
 */

//Exportación del módulo

exports.singleMrMeeseks = generate;