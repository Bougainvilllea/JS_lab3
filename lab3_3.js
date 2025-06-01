function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let check = isEmpty({});
document.write(check, "<br>");
check = isEmpty({name : "John"});
document.write(check);

// true
// false
