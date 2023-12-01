var prompt = require('prompt-sync')();
const array = []
array2=[]
const num = prompt('Quantos vc vai adiconar? ')
for (i = 0; i<num; i++){
    console.log("Qual o seu nome?")
    let nome = prompt("digite aqui: ")
    console.log("Quantas vitorias?")
    let vitorias = prompt("digite aqui: ")
    console.log ("Quanats derrotas?")
    let derrotas = prompt("digite aqui: ") 
    const ranking = {}
    ranking.nome= nome
    ranking.vitorias=parseInt(vitorias)
    ranking.derrotas=parseInt(derrotas)
    array.push(ranking)
    console.clear()
}

array.sort((a, b) => b.vitorias - a.vitorias);

let rank = 1;
array.forEach(player => {
    console.log(`${rank}º ${player.nome}`);
    rank++;
});