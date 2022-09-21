/*
let num = [6,8,7,5]
console.log(`A ordem é ${num.sort()}`)
num [4] = 9
num.push(10)
console.log(`Nosso vetor é ${num}`)
console.log(num.length)
console.log(num[5])
for(let pos = 0; pos< num.length;pos++){
    console.log(`${num[pos]}`)
}

let valores = [7,8,5,10,6]
for (var c = 0;c < valores.length; c++){
    console.log(`A posição ${c} tem valor ${valores[c]}`)
}
*/
let valores = [1,2,3,4]
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let v = valores.indexOf(1)
if (v == 0){
    console.log('Hamburguer')
}
console.log(v)
