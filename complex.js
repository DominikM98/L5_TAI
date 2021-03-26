"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subs = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.modul = function () {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    };
    Complex.prototype.toString = function () {
        console.log('re: ', this.real, ', im: ', this.imaginary);
    };
    return Complex;
}());
var obj1 = new Complex(4, 5);
var obj2 = new Complex(3, 1);
var add = obj1.add(obj2);
add.toString();
var subs = add.subs(obj1);
subs.toString();
var modul = subs.modul();
console.log(modul);
