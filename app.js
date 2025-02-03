//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Por favor, insira um nome.');
    }  else {
        let nome = document.getElementById('amigo').value;
        listaDeAmigos.push(nome);
        console.log(listaDeAmigos); 
        limparCampo();
    } 
}

        function limparCampo() {
            let zerar = document.querySelector('input');
            zerar.value = '';
        }
            
