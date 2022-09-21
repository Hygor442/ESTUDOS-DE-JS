//Arows functions
/*
(a,b) => {
    return a + b
}
(a+b) => a + b
*/

let a = 5;
let b = 10;
let c = (num1,num2) => num1 + num2;
console.log(c(a,b));


let d = (x,y) => {
    let op;
    if(x > 5){
        op = x * y;
    } else {
        op = y / x;
    }
    return op;
}

console.log(d(a,b))

//não usar arrow
let pessoa = { // nesse caso se deve usar uma function normal
    nome : "hygor",
    sayName : function(){
        console.log(this.nome);
    }
}
pessoa.sayName()