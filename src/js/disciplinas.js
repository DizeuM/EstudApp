function carregarJSON(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar o JSON.');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
}
  
function listarDisciplinasPorIdETipo(periodos, tipo, periodo) {
  return periodos[periodo][tipo].disciplinas;
}
  
function criarBotoesDisciplinas(disciplinas) {
  const disciplinasContainer = document.getElementById('disciplinas-container');

  disciplinas.forEach(disciplina => {
    const botaoDisciplina = document.createElement('button');
    botaoDisciplina.className = 'btn btn-primary btn-lg w-100 mb-3';
    botaoDisciplina.textContent = disciplina.nome;
    botaoDisciplina.setAttribute('data-disciplina-id', disciplina.id);

    botaoDisciplina.addEventListener('click', () => {
      const disciplinaId = botaoDisciplina.getAttribute('data-disciplina-id');
      window.location.href = `/src/pages/disciplinas/detalhes.html?tipo=${tipo}&periodo=${periodo}&disciplina=${disciplinaId}`;
    });

    disciplinasContainer.appendChild(botaoDisciplina);
  });
}
  
const urlJSON = '/src/data/disciplinas.json';

const urlParams = new URLSearchParams(window.location.search);
const tipo = urlParams.get('tipo');
const periodo = parseInt(urlParams.get('periodo'));

carregarJSON(urlJSON).then(data => {
  const disciplinas = listarDisciplinasPorIdETipo(data.periodos, tipo, periodo);
  criarBotoesDisciplinas(disciplinas);
});
  