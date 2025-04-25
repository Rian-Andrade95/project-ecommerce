// Espera o DOM estar carregado
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os elementos
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const searchResult = document.getElementById('search-result');

  // Adiciona o evento de clique no botão
  searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();

    if (query) {
      searchResult.textContent = `Você buscou por: '${query}'`;
      searchResult.classList.add('text-success');
    } else {
      searchResult.textContent = 'Por favor, digite um termo para buscar.';
      searchResult.classList.remove('text-success');
      searchResult.classList.add('text-danger');
    }
  });

  // Opcional: também podemos ativar a busca pressionando "Enter"
  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      searchButton.click();
    }
  });
});
