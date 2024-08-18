export default function doSomething() {

}

export const DoSomething = () => {


}

const MyComponent = () => {
  return <div></div>
}


{/* <button onClick={() => {
  console.log("Hello I clicked the button");
}) ></button >; */}

if (true) {

} else {

}

// let age = 10;
// let name = "Kritim";
// let result = age > 10 ? name : "Not Greater then 10";
// console.log(result);

const person = {
  name: "Pedro",
  age: 20,
  isMarried: false,
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;


const { name, age, isMarried } = person;



const person1 = {
  name: "Pedro",
  age: 20,
  isMarried: false,

};

const person2 = { ...person1, name: "Jack" }

const names = ["Pedro", "Jack", "Jessica"]

const names2 = [...names, "Joel"];



names.map((name) => {
  console.log(name);
})


names2.map((name) => {
  return <h1>{name}</h1>
})



names.filter((nam) => {
  return name !== "Pedro"

})








// names.forEach();

// .map()
//   .filter()
//   .reduce()

