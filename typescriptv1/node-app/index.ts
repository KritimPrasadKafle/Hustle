const x:number = 1;
console.log(x);

function greeting(name: string){
    console.log("Hello"+name);
    
}
greeting("Kritim");


function sum(a:number, b:number): number{
    return a + b;
}

const s:number = sum(5,6);
console.log(s);


function isLegal(age:number){
    if (age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(20));

function one(hello: () => void){
    setTimeout(hello,1000)


}

one(function(){
    console.log("hi there");
    
})

const user = {
    firstName: 'kritim',
    lastName: 'kafle',
    email: 'hello@gmail.com',
    age: 21
}

interface User{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}


function isLegalv1(user: User): Boolean{
    if (user.age > 18){
        return true;
        
    }else{
        return false;
    }
}



isLegalv1(user);

// Todo.tsx
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

// function Todo({ todo }: TodoInput) {
//   return <div>
//     <h1>{todo.title}</h1>
//     <h2>{todo.description}</h2>
    
//   </div>
// }



interface Person{
    name: string;
    age: string;
    greet(phrase: string): void;
}

class Employee implements Person{
    name: string;
    age: number;
    constructor(n: string, a:number){
        this.name = n;
        this.age = a;

    }

    greet(phase: string){
        console.log(`${phrase} ${this.name}`);

    }
}

abstract class Shape{
    abstract name:string;

    abstract calculateArea(): number;

    describe():void{
        console.log(`This shape is a `);
        
    }
}

class Rectangle extends Shape{
    name = "Rectangle";

    constructor(public width:number, public height: number){
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape{
    name = "Circle";
    constructor(public radius: number){
        super();
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

type User1 = {
    firstName: string;
    lastName: string;
    age: number;
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber){
    console.log(`ID: ${id}`);
}

printId(101);
printId("34243");

type Employee1 = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string

}

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
    name: "Kritim",
    department: "Software Developer",
    startDate: new Date(),
}

function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

interface User2{
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUser(user: User2[]){
    return user.filter((user) => user.age >= 18);
}

function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<String>("mystring");
let output2 = identity<Number>(23234);


export function add(x: number, y:number) : number{
    return x + y;
}

export function subtract(x: number, y: number): number{
    return x - y;
}


add(1,2)

export default class Calculator{
    add(x: number, y:number): number{
        return x + y;
    }
}



const calc = new Calculator();

console.log(calc.add(10,5));


