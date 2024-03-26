let num = [5,4,3]
num.push(8)
num.sort()
console.log(`Nosso vetor é ${num}`) 
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log (`O valor 4 está na posição ${pos}`)
}

