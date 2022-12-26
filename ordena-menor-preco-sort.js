var produtos = [
    { nome: 'Lamborghini', preco: 1000000 },
    { nome: 'Jipe', preco: 46000 },
    { nome: 'Brasília', preco: 16000 },
    { nome: 'Smart', preco: 46000 },
    { nome: 'Fusca', preco: 17000 }
]

produtos.sort(function (a, b) {
    if (a.preco < b.preco) {
        return -1
    } else {
        return true
    }
})

console.log(produtos)
console.log(`O carro mais barato é: ${produtos[0].nome} e custa R$ ${produtos[0].preco.toFixed(2)}`)