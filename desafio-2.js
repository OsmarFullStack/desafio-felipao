const readline = require("readline");

// Cria interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível ${nivel}`;
}

// Entrada de dados
rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {

        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        const resultado = calcularRank(vitorias, derrotas);
        console.log(resultado);

        rl.close();
    });
});
