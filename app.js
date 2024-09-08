/**
 * Função responsável por realizar uma pesquisa e exibir os resultados na página.
 */
function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada elemento 'dado' dentro do array 'dados'
    for (let dado of dados) {
        // Constrói o HTML para cada resultado da pesquisa
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao-meta">${dados[1].descricao}.</p> 
                <a href="${dado.link}" target="_blank"> Mais informações</a>
            </div>
        `;
    }

    // Insere o HTML dos resultados na seção correspondente
    section.innerHTML = resultados;
}