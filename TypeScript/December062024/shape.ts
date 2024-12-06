class Shape {
  area() {
    console.log("hi I am area");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor() {
    super();
    this.width = 1;
    this.height = 2;
  }
}
