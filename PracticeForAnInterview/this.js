const person = {
  name: "Hello world",
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet());