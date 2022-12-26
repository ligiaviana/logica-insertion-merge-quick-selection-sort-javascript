const precos = [
    { nome: 'Lamborghini', preco: 1000000 },
    { nome: 'Jipe', preco: 46000 },
    { nome: 'Brasília', preco: 16000 },
    { nome: 'Smart', preco: 46000 },
    { nome: 'Fusca', preco: 17000 }
]

let maisCaro = 0

for (let atual = 0; atual < precos.length; atual++) {
    if (precos[atual].preco > precos[maisCaro].preco) {
        maisCaro = atual
    }
}

console.log(`O carro mais caro é: ${precos[maisCaro].nome} e custa R$ ${precos[maisCaro].preco.toFixed(2)}`)
