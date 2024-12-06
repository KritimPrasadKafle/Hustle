interface Address {
  city: string;
  country: string;
  pincode: number;
}
interface User {
  name: string;
  age: number;
  address?: Address;
}

let user2: User = {
  name: "Hello",
  age: 34,
};

let user: User = {
  name: "John",
  age: 21,
  address: {
    city: "London",
    country: "UK",
    pincode: 12345,
  },
};

function isLegal(user: User): boolean {
  return user.age >= 18;
}

const ans1 = isLegal(user);
console.log(ans1);
