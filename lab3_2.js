let myBrowser = {
    name : "Microsoft Internet Explorer",
    version : 9.0,
}

for (key in myBrowser) {
    document.write(myBrowser[key], "<br>")
}

// если вдруг нужен ноль после точки

// for (key in myBrowser) {
//     if (key === "version") {
//         document.write(myBrowser[key].toFixed(1), "<br>");
//     } else {
//         document.write(myBrowser[key], "<br>");
//     }
// }
