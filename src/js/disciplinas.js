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
  
  function listarDisciplinasPorIdETipo(periodos, tipo, id) {
    return periodos[id][tipo].disciplinas;
  }
  
  function criarBotoesDisciplinas(disciplinas) {
    const disciplinasContainer = document.getElementById('disciplinas-container');
  
    disciplinas.forEach(disciplina => {
      const botaoDisciplina = document.createElement('button');
      botaoDisciplina.className = 'btn btn-primary btn-lg w-100 mb-3';
      botaoDisciplina.textContent = disciplina.nome;
  
      botaoDisciplina.addEventListener('click', () => {
        alert(`Você clicou na disciplina ${disciplina.nome}`);
      });

      disciplinasContainer.appendChild(botaoDisciplina);
    });
  }
  
  const urlJSON = '/src/data/disciplinas.json';
  
  const urlParams = new URLSearchParams(window.location.search);
  const tipo = urlParams.get('tipo');
  const id = parseInt(urlParams.get('id'));
  
  carregarJSON(urlJSON)
    .then(data => {
      const disciplinas = listarDisciplinasPorIdETipo(data.periodos, tipo, id);
      criarBotoesDisciplinas(disciplinas);
    });
  