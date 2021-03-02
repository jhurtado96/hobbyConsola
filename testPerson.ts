import {Person} from "./Person"
let personita1 = new Person("aa","aa","aa",4)
let personita2 = new Person("Paco","Spain","Developer",4)

console.log(personita1.igualPersona(personita2))

personita2.mostrarDatos()
console.log(personita2.devolverDatos())