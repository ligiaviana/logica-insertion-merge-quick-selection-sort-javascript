const precos = [1000000, 46000, 16000, 46000, 17000]

let maisBarato = 0;

for(let atual = 0; atual < precos.length; atual++){
    if(precos[atual] < precos[maisBarato]){
        maisBarato = atual
    }
}

console.log(maisBarato)
console.log(`O carro mais barato custa R$ ${precos[maisBarato]}`)