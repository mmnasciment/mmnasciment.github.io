document.addEventListener('DOMContentLoaded', function() {
    const username = 'SEU-USUARIO-DO-GITHUB'; // Não precisa dessa busca agora, os projetos serão fixos

    // Efeito de hover nas habilidades
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('hovered');
        });
        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('hovered');
        });
    });

    // Renderização estática dos projetos (você pode expandir isso posteriormente)
    const projetosContainer = document.getElementById('lista-projetos');
    const projetos = [
        {
            nome: 'Análise de Dados de Vendas',
            descricao: 'Projeto utilizando Python, Pandas e Matplotlib para analisar dados de vendas e identificar tendências importantes.',
            tecnologias: 'Python, Pandas, Matplotlib',
            link: 'https://github.com/SEU-USUARIO-DO-GITHUB/nome-do-repositorio-vendas'
        },
        {
            nome: 'Visualização de Dados com Seaborn',
            descricao: 'Criação de visualizações informativas e atraentes utilizando a biblioteca Seaborn para explorar um conjunto de dados público.',
            tecnologias: 'Python, Seaborn',
            link: 'https://github.com/SEU-USUARIO-DO-GITHUB/nome-do-repositorio-seaborn'
        },
        {
            nome: 'Modelagem Preditiva com Scikit-learn',
            descricao: 'Implementação de um modelo de machine learning para prever [algum resultado] utilizando o Scikit-learn.',
            tecnologias: 'Python, Scikit-learn',
            link: 'https://github.com/SEU-USUARIO-DO-GITHUB/nome-do-repositorio-modelo'
        }
        // Adicione mais projetos aqui
    ];

    projetos.forEach(projeto => {
        const projetoCard = document.createElement('div');
        projetoCard.classList.add('projeto-card');

        projetoCard.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <p class="tech-stack">Tecnologias: ${projeto.tecnologias}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        `;

        projetosContainer.appendChild(projetoCard);
    });
});
