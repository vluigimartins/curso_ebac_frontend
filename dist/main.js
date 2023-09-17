"use strict";

var alunos = [{
  nome: 'Paulo',
  nota: 6.5
}, {
  nome: 'Marcos',
  nota: 5.0
}, {
  nome: 'Raissa',
  nota: 9.5
}, {
  nome: 'Geovana',
  nota: 8.0
}, {
  nome: 'Marina',
  nota: 3.5
}];
var FltraAlunos = function FltraAlunos(aluno) {
  return aluno.nota >= 6;
};
var alunosAprovados = alunos.filter(FltraAlunos);
console.log(alunosAprovados);