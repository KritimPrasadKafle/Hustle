// const person = {
//   name: "Hello world",
//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// };

// console.log(person.greet());


const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log('Hello, my name is ' +
      this.name + ' and I am '
      + this.age +
      ' years old.');
  }
};

person.greet();