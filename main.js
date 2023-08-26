function Funcionario(nome, salario) {
    this.nome = nome;
    this.salario = salario;

    this.getSalario = function() {
        return this.salario;
    }

    this.setSalario = function(novoSalario) {
        this.salario = novoSalario;
    }
}

function Administrador(nome, bonus) {
    Funcionario.call(this, nome, 5000);
    this.bonus = bonus;
    const novoSalario = this.getSalario() + bonus;
    this.setSalario(novoSalario);
}

function Vendedor(nome, comissao) {
    Funcionario.call(this, nome, 2400);
    this.comissao = comissao;
    const novoSalario = this.getSalario() + comissao;
    this.setSalario(novoSalario);
}

const admin1 = new Administrador("Katarina", 1000);
const vendedor1 = new Vendedor("Leonardo", 1200);
const vendedor2 = new Vendedor("Victor", 900);

console.log(admin1.getSalario());
console.log(vendedor1.getSalario());
console.log(vendedor2.getSalario());
