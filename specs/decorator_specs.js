const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function () {
    let decorator;

    beforeEach(function () {
        decorator = new Decorator();
    })

    describe('paintStock', function() {

        it('should start with empty paint stock', function() {
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, []);
        })

        it('should be able to add a paint can', function() {
            decorator.addPaintCan(5);
            const actual = decorator.cansInStock();
            assert.strictEqual(actual, 1);
        })

        it('should tell how many litres in stock', function() {
            decorator.addPaintCan(5);
            decorator.addPaintCan(10);
            const actual = decorator.litresInStock();
            assert.strictEqual(actual, 15);
        })


    })
})


