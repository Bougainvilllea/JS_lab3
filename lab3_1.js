let user = {};
user.name = "John";
user.surname = "Smith";
document.write(user.name, "&nbsp;", user.surname, "<br>");
user.name = "Pete";
document.write(user.name, "&nbsp;", user.surname, "<br>");
delete user.name;
document.write(user.name, "&nbsp;", user.surname);