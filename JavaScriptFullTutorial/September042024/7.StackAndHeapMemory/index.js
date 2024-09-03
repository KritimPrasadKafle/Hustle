//Memory

//Stack,Heap

//Stack => Primitive
//Heap => Non-Primitive

let myYoutube = "kritimdotcom" //this will go the th stack memory

let anothername = myYoutube
anothername = "kafledotcom"

console.log(myYoutube)
console.log(anothername)


//This will go to the Heap
let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}


// The value of the userOne will go to the heap memory whereas the the reference i.e. userone will go to the stack and if the userone equals t the usertwo then this also refernce to the same

let userTwo = userone;