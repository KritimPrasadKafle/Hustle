class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, 6);
const area = rect.area();
console.log(area);


// const rect1 = {
//   width: 2,
//   height: 3,
//   color: "red"
// }

// function area(rect) {
//   return rect.width * rect.height;
// }

// const ans = area(rect1);
// console.log(ans);