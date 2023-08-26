function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resMultiplicacao = multiplicacao(178, 300);
const msgSaudacao = saudacao("Marcos");

console.log(resMultiplicacao); 
console.log(msgSaudacao);      
