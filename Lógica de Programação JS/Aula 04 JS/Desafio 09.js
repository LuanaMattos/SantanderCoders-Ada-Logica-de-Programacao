// Desafio 9
// - Determinação de Estação do Ano
// ● Escreva um programa que recebe o nome de um mês como entrada e 
// utiliza um switch case para determinar a estação do ano 
// correspondente. Use a seguinte correspondência de meses:
// - Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: 
// "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, 
// Novembro: "Outono"

const mes = prompt("Digite o nome de um mês:").toLowerCase(); // Convertendo a entrada para minúsculas para facilitar a comparação

switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log("Inverno");
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log("Primavera");
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log("Verão");
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log("Outono");
        break;
    default:
        console.log("Por favor, insira um mês válido.");
}

