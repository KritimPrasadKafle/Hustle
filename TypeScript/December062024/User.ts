interface User1 {
  name: string;
  age: number;
  isLegal(): boolean;
}

class Manager3 implements User1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  isLegal(): boolean {
    return this.age >= 18;
  }
}

class God extends Manager3 {
  constructor(name: string, age: number) {
    super(name, age);
  }
}
const m = new Manager3("Harkirat", 21);
console.log(m.isLegal());
