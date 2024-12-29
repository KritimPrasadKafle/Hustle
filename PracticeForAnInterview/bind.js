const person = {
  name: 'John Doe',
  greet: function () {
    console.log('Hello, my name is ' + this.name);
  }
};

const greetFn = person.greet;
const boundFn = greetFn.bind(person);
boundFn();