"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("Hi there");
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
