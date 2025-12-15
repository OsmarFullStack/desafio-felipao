/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 6.000 = Ouro
Se XP for entre 6.001 e 7.000 = Platina Diamante
Se XP for entre 7.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual 10.001 = Radiante

##Saída

Ao final deve exibir uma mensagem
"O Heroi de **{nome}** esta no nivel de **{nivel}"

*/

let nomeHeroi = "Eneias";
let xpHeroi = 2500;

let nivel = "";

// Estrutura de decisão
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 6000) {
    nivel = "Ouro";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivel = "Platina Diamante";
} else if (xpHeroi >= 7001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else if (xpHeroi >= 10001) {
    nivel = "Radiante";
}

// Saída
console.log("O Heroi " + nomeHeroi + " esta no nivel de " + nivel);

