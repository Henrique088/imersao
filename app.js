document.getElementById("botao").addEventListener("click", function () {
    var valorInput = document.getElementById("pesquisa").value;
    console.log(valorInput);

    let filtro = filtrarPorNome(dados, valorInput);
    console.log(filtro);

    // Seleciona o container onde os resultados serão adicionados
    let meuSection = document.querySelector('.resultados-pesquisa');
    console.log(meuSection);

    // Limpa o conteúdo existente (opcional)
    meuSection.innerHTML = '';

    if (filtro != null) {
        let htmlResultado = '';

        // Itera sobre os dados e cria o HTML dinamicamente
        for (let filtros of filtro) {
            htmlResultado += `
                <div class="item-resultado">
                    <h2><a href="${filtros.link}" target="_blank" class="titulo">${filtros.titulo}</a></h2>
                    <p>${filtros.descricao}<br><br>${filtros.frase}</p>
                    <a href="${filtros.link}" target="_blank">Saiba Mais</a>
                </div>
            `;
        }

        // Insere o HTML gerado de uma vez no DOM
        meuSection.innerHTML = htmlResultado;
        document.getElementById("pesquisa").value = "";

    } else {
        meuSection.innerHTML = ` <div class="item-resultado">
        <p>Filósofo não encontrado na base de dados.</p>
        </div>
        `;
        document.getElementById("pesquisa").value = "";
    }
});

// Função para remover acentos
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para filtrar os nomes
function filtrarPorNome(array, termo) {
    if (termo === '' || termo === ' ') {
        return null;
    } else {
        termo = removerAcentos(termo.toLowerCase());
        let resultado = array.filter(item =>
            removerAcentos(item.titulo.toLowerCase()).includes(termo)
        );

        return resultado.length > 0 ? resultado : null;
    }
}
