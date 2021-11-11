//mrMeeseks test file
//Modulo MrMeeseks

const generate = require('../mr_meeseks');

test('Crear meeseks con su generador', () => {
    expect(generate.singleMrMeeseks.get()).toBeTruthy();
});

test('Los meeseks generados son iguales (singleton)', () => {
    let primer_meeseks = generate.singleMrMeeseks.get();
    let segundo_meeseks = generate.singleMrMeeseks.get();

    expect(segundo_meeseks === primer_meeseks).toBe(true);
});