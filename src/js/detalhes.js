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

function buscarDetalhesDisciplinaPorId(json, id) {
  for (const periodo in json.periodos) {
    for (const tipo in json.periodos[periodo]) {
      const disciplinas = json.periodos[periodo][tipo].disciplinas;
      const disciplina = disciplinas.find(disciplina => disciplina.id === id);
      if (disciplina) {
        return disciplina;
      }
    }
  }
  return null;
}
var minUpdate = Math.floor(Math.random() * 15) + 1;

function exibirDetalhesDisciplina(tipo, periodo, disciplina) {
  const detalhesDisciplinaContainer = document.getElementById('detalhes-disciplina');
  const detalhesHTML = `
    <div class="card">
      <div class="card-header">
        <h4 class="mt-1">${disciplina.nome}</h4>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>${periodo}° Período | ${tipo}</strong></p>
        <p class="card-text"><strong>Professor(a):</strong> ${disciplina.professor}</p>
        <p class="card-text"><strong>Carga Horária:</strong> ${disciplina.carga_horaria} horas</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Última atualização a ${minUpdate}min</small>
      </div>
    </div>
  `;
  detalhesDisciplinaContainer.innerHTML = detalhesHTML;
}

const urlJSON = '/src/data/disciplinas.json';

const urlParams = new URLSearchParams(window.location.search);
let tipo = urlParams.get('tipo'); 
if(tipo == 'tecnico'){
  tipo = "Técnico";
}else{tipo = "Médio"};
const periodo = parseInt(urlParams.get('periodo'));
const disciplinaId = parseInt(urlParams.get('disciplina'));

carregarJSON(urlJSON).then(data => {
  const disciplina = buscarDetalhesDisciplinaPorId(data, disciplinaId);

  exibirDetalhesDisciplina(tipo, periodo, disciplina);
});
