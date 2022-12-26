const precos = [
    { nome: 'Lamborghini', preco: 1000000 },
    { nome: 'Jipe', preco: 46000 },
    { nome: 'Brasília', preco: 16000 },
    { nome: 'Smart', preco: 46000 },
    { nome: 'Fusca', preco: 17000 }
]


let maisBarato = 0

for (let atual = 0; atual < precos.length; atual++) {
    if (precos[atual].preco < precos[maisBarato].preco) {
        maisBarato = atual
    }
}

console.log(`O carro mais barato é: ${precos[maisBarato].nome} e custa R$ ${precos[maisBarato].preco.toFixed(2)}`)











