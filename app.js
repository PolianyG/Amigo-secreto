//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let mostrarNomesNaLista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Por favor, insira um nome.');
    }  else {
        let nome = document.getElementById('amigo').value;
        listaDeAmigos.push(nome);
        console.log(listaDeAmigos); 
        limparCampo();
        mostrarListaDeAmigos();
    } 
}

        function limparCampo() {
            let limpar = document.querySelector('input');
            limpar.value = '';
        }
            
        function mostrarListaDeAmigos() {
            let ul = document.getElementById('listaAmigos');
            ul.innerHTML = '';
        
            listaDeAmigos.forEach(function(nome) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(nome));
                ul.appendChild(li);
            })
        }

        function sortearAmigo() {
            if (listaDeAmigos.length === 0) {
                alert('Por favor, insira um nome.');
        } else {
            let nomeSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = 'O amigo secreto é: '+ nomeSorteado;
        }
    }