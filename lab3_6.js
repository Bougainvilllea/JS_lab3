calculator = {
    read(a, b) {
        this.a = a
        this.b = b
    },

    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}

calculator.read(5, 3);
document.write(calculator.sum(), "<br>"); 
document.write(calculator.mul());