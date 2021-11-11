// box  test file

//import el paquete de Box
const caja = require('../box');

test('Creo la caja con el generador', () => {
    expect(caja.SingleBox.get()).toBeTruthy();
});

test('Factoria devuelve siempre la misma caja (singleton)', () => {
    let box_primer = caja.SingleBox.get();
    let box_post = caja.SingleBox.get();
    expect(box_primer === box_post).toBe(true);
});