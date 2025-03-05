function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let a = isEmpty({});
document.write(a, "<br>");
a = isEmpty({name : "John"});
document.write(a);