function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
    document.write(JSON.stringify(obj));
}

let cookes = {
    round: 333,
    caramel: 948,
    strawberry: "not available for sale",
    chocolate: 345,
  };

(multiplyNumeric(cookes))
