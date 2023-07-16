let name = prompt("What's your name?", "Artem");

name = name.toLowerCase()

let capital = name.slice(0,1).toUpperCase();

name = capital + name.slice(1)

alert("Hello, " + name)
