function Calculator() {
    
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    }

    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function() {
        return this.a * this.b
    }
}

const calculator1 = new Calculator();

calculator1.read(7, 9)
document.writeln(calculator1.sum());
document.writeln(calculator1.mul());