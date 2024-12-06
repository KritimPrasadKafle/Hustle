interface People {
  name: String;
  age: Number;
  greet?: () => string;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user1 = new Manager("John Doe", 30);
console.log(user.age);
