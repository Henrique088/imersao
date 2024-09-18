# Site de Filósofos

Este projeto é um site simples que permite aos usuários pesquisar informações sobre filósofos famosos. O site exibe uma breve descrição e uma frase marcante dos filósofos encontrados na pesquisa. O site foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript** para manipulação de dados e elementos na página.

## Funcionalidades

- **Pesquisa por filósofos:** O usuário pode digitar o nome de um filósofo no campo de pesquisa, e o site exibirá uma lista de filósofos que correspondem ao termo pesquisado.
- **Informações exibidas:** Para cada filósofo encontrado, são exibidos:
  - O nome do filósofo.
  - Uma breve descrição sobre sua vida e contribuições.
  - Uma frase marcante do filósofo.
  - Um link para mais informações sobre o filósofo (Wikipedia).
  
## Tecnologias Utilizadas

### HTML
- Estruturação da página e dos elementos.
- Formulário de pesquisa e container para os resultados.

### CSS
- Estilização da página.
- Organização e layout dos elementos, como o campo de pesquisa e as seções de resultados.
- Aplicação de estilos responsivos e dinâmicos para melhor experiência do usuário.

### JavaScript
- Manipulação da base de dados contendo informações dos filósofos.
- Manipulação do DOM para exibir os resultados de pesquisa dinamicamente.
- Funções para pesquisar e filtrar os filósofos com base na entrada do usuário.
- Implementação de transições e animações simples para melhorar a interação.

## Como Usar

1. **Pesquisa:**
   - O usuário deve digitar o nome do filósofo no campo de pesquisa.
   - O site faz a busca na base de dados e exibe os resultados que correspondem ao nome ou parte do nome do filósofo.
   
2. **Resultados:**
   - Se um ou mais filósofos forem encontrados, uma lista será exibida com o nome, a descrição, a frase e o link para mais informações.
   - Caso nenhum filósofo seja encontrado, uma mensagem será exibida informando o usuário.

## Estrutura do Projeto

```bash
├── index.html        # Página principal com a estrutura do site
├── style.css         # Arquivo de estilo para a página
├── app.js            # Lógica em JavaScript para manipulação de dados e interatividade
└── README.md         # Este arquivo, com as instruções do projeto
