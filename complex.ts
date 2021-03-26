class Complex{
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(obj: Complex): Complex{
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }

    subs(obj: Complex): Complex{
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }

    modul(): number{
        return Math.sqrt(this.real*this.real + this.imaginary*this.imaginary);
    }

    toString(){
        console.log('re: ', this.real, ', im: ', this.imaginary);
    }
}

let obj1  = new Complex(4,5);
let obj2 = new Complex(3,1);

let add = obj1.add(obj2);
add.toString();

let subs  = add.subs(obj1);
subs.toString();

let modul = subs.modul();
console.log(modul);