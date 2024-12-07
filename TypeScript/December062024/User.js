"use strict";
class Manager3 {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    isLegal() {
        return this.age >= 18;
    }
}
class God extends Manager3 {
    constructor(name, age) {
        super(name, age);
    }
}
const m = new Manager3("Harkirat", 21);
console.log(m.isLegal());
