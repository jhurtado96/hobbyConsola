"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    Person.prototype.mostrarDatos = function () {
        console.log("*******************");
        console.log("Name: " + this.name);
        console.log("Natioality: " + this.name);
        console.log("Profession: " + this.name);
        console.log("Experience Years: " + this.name);
        console.log("*******************");
    };
    Person.prototype.devolverDatos = function () {
        return this.name + " " + this.nationality + " " + this.profession + " " + this.experienceYears;
    };
    Person.prototype.igualPersona = function (persona) {
        var bool = false;
        if (this.name == persona.getName()) {
            if (this.nationality == persona.getNationality()) {
                if (this.profession == persona.getProfession()) {
                    if (this.experienceYears == persona.getExperienceYears()) {
                        bool = true;
                    }
                }
            }
        }
        return bool;
    };
    return Person;
}());
exports.Person = Person;
