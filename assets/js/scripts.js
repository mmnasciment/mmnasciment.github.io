document.addEventListener('DOMContentLoaded', function() {
    const username = 'SEU-USUARIO-DO-GITHUB'; // <-- TROQUE PELO SEU USUÁRIO
    const projetosContainer = document.getElementById('lista-projetos');

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const projetoCard = document.createElement('div');
                projetoCard.classList.add('projeto-card');

                const nomeProjeto = document.createElement('h3');
                nomeProjeto.textContent = repo.name;

                const descricaoProjeto = document.createElement('p');
                descricaoProjeto.textContent = repo.description || 'Sem descrição.';

                const linkProjeto = document.createElement('a');
                linkProjeto.href = repo.html_url;
                linkProjeto.textContent = 'Ver no GitHub';
                linkProjeto.target = '_blank'; // Para abrir em nova aba

                projetoCard.appendChild(nomeProjeto);
                projetoCard.appendChild(descricaoProjeto);
                projetoCard.appendChild(linkProjeto);

                projetosContainer.appendChild(projetoCard);
            });
        })
        .catch(error => console.error('Erro ao buscar repositórios:', error));
});
