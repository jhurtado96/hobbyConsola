"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var personita1 = new Person_1.Person("aa", "aa", "aa", 4);
var personita2 = new Person_1.Person("Paco", "Spain", "Developer", 4);
console.log(personita1.igualPersona(personita2));
personita2.mostrarDatos();
console.log(personita2.devolverDatos());
