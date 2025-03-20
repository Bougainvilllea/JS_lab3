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