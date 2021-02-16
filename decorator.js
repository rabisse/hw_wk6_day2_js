const Paint = require('./paint.js');


const Decorator = function() {
    this.paintStock = []
}

Decorator.prototype.cansInStock = function() {
    return this.paintStock.length
}

Decorator.prototype.addPaintCan = function(paintLitres) {
    let newPaint = Paint(paintLitres)
    this.paintStock.push(newPaint)
}

Decorator.prototype.litresInStock = function() {
    let totalLitres = 0;
    for (var can of this.paintStock) {totalLitres += can.litres
    };
    return totalLitres
}



module.exports = Decorator;