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