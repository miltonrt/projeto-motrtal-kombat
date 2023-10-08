const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
    personagem.addEventListener('click', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagem(personagem);

        alterarDescricaoPersonagem(personagem);

        alterarTagPersonagem(personagem);
    })
})

function alterarTagPersonagem(personagem) {
    const tagPersonagem = document.getElementById('tag_personagem');
    tagPersonagem.innerText = personagem.getAttribute('data-tag');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao_personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome_personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem_grade');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/fc_${idPersonagem}.gif`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}