/**
 * refactoring
 *let employee = {};
 * employee.code = 10;
 * employee.name = "John";
 */
//implicit
var funcionario = {
    codigo: 10,
    nome: 'João'
};
// explicit
var funcionario2 = {
    codigo: 10,
    nome: 'joao'
};
;
var funcionarioObj = {};
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';
/**
 *refactoring
 let pessoa1 = {};
 pessoa1.nome = "maria";
 pessoa1.idade = 29;
 pessoa1.profissao = "atriz"

 let pessoa2 = {}
 pessoa2.nome = "roberto";
 pessoa2.idade = 19;
 pessoa2.profissao = "Padeiro";

 let pessoa3 = {
   nome: "laura",
   idade: "32",
   profissao: "Atriz"
 };

 let pessoa4 = {
   nome = "carlos",
   idade = 19,
   profissao = "padeiro"
 }
 */
var Work;
(function (Work) {
    Work[Work["Actress"] = 0] = "Actress";
    Work[Work["Baker"] = 1] = "Baker";
})(Work || (Work = {}));
var person1 = {
    name: "Maria",
    age: 29,
    profession: Work.Actress
};
;
var person2 = {};
person2.name = "Roberto";
person2.age = 19;
person2.profession = Work.Baker;
var person3 = {
    name: "Laura",
    age: 32,
    profession: Work.Actress
};
var person4 = {
    name: "Carlos",
    age: 19,
    profession: Work.Baker
};
/**
 * refactor
 * let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
 */
/**
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
//# sourceMappingURL=script.js.map