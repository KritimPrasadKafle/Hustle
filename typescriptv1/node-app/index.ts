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

