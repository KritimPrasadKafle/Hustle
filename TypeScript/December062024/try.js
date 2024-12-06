"use strict";
let user2 = {
    name: "Hello",
    age: 34,
};
let user = {
    name: "John",
    age: 21,
    address: {
        city: "London",
        country: "UK",
        pincode: 12345,
    },
};
function isLegal(user) {
    return user.age >= 18;
}
const ans1 = isLegal(user);
console.log(ans1);
