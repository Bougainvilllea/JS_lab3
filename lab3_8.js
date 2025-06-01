function Browser(name, version) {
    this.name = name;
    this.version = version;
    
    this.aboutBrowser = function() {
        document.write(`Браузер: ${this.name}, Версия: ${this.version}`, "<br>");
    };
}

const myBrowser = new Browser("Microsoft Internet Explorer", "9.0");

document.write(`Name: ${myBrowser.name}`, "<br>");
document.write(`Version: ${myBrowser.version}`, "<br>");

myBrowser.aboutBrowser();

// Name: Microsoft Internet Explorer
// Version: 9.0
// Браузер: Microsoft Internet Explorer, Версия: 9.0
