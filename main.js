const form = document.getElementById("form_atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinhas();
    attTabela();
    attMediaFinal();
});

function addLinhas(){
    const inputNomeAtividade = document.getElementById("nome_atividade");
    const inputNotaAtividade = document.getElementById("nota_atividade");

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    }
    else{
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>'; //aspas simples
        linha += `<td>${inputNomeAtividade.value}</td>`; //crase
        linha += `<td>${inputNotaAtividade.value}</td>`; //crase 
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //crase
        linha += '</tr>'; //aspas simples

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function attTabela(){ //função para atualizar o corpo da tabela
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function attMediaFinal(){
    const mediaFinal = calcMediaFinal();

    document.getElementById("mediaFinalValor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("mediaFinalResultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calcMediaFinal(){ //função para calcular a média final
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}