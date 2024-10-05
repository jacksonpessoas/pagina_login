# Página de Login com Transição de Desligamento

Este projeto é uma página de login em HTML com uma animação de transição ao clicar no botão de desligar, que leva o usuário de volta à página de login após uma breve animação.

## Funcionalidades

- **Página de Login**: Usuários fornecem suas credenciais para acessar a área restrita.
- **Página Inicial (Home)**: Após o login bem-sucedido, o usuário é redirecionado para a página inicial.
- **Botão de Desligar**: Na página inicial, o usuário pode clicar no botão de desligar (localizado sobre a imagem de um monitor). Esse clique inicia uma transição que exibe uma imagem de "Shutting Down" e, após 2 segundos, redireciona o usuário de volta à página de login.
  
## Estrutura do Projeto

- `index.html`: Página de login.
- `home.html`: Página inicial após login bem-sucedido.
- `transicao.html`: Página de transição com a animação de "Shutting Down".
- `css/`: Pasta contendo os arquivos CSS para estilização das páginas.
- `img/`: Pasta contendo as imagens usadas no projeto, incluindo a animação do monitor.

## Como Funciona

1. **Login**: O usuário faz login na `index.html`.
2. **Página Inicial**: Ao acessar a `home.html`, o usuário pode clicar no botão de desligar (sobre a imagem de um monitor).
3. **Transição**: Clicando no botão de desligar, o usuário é redirecionado para `transicao.html`, que exibe uma animação de desligamento.
4. **Retorno ao Login**: Após 2 segundos, o usuário é automaticamente redirecionado de volta para a página de login (`index.html`).

## Tecnologias Utilizadas

- **HTML**: Estrutura das páginas.
- **CSS**: Estilização das páginas e posicionamento do botão sobre o monitor.
- **JavaScript**: Implementação da lógica de transição de páginas e temporização para redirecionamento.

## Como Rodar o Projeto

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em seu navegador para iniciar o processo de login.
3. Navegue até a página inicial e clique no botão de desligar para testar a animação de transição.

## Melhorias Futuras

- Implementar autenticação e validação real de login com backend (ex.: utilizando Node.js ou Python com banco de dados PostgreSQL).
- Adicionar animações mais dinâmicas na página de transição.
- Implementar um sistema de sessões para controlar a navegação entre as páginas.

## Contato

Para mais informações, entre em contato através do meu [LinkedIn](https://www.linkedin.com/in/jackson-pessoa-soares).

## Criado por

JacksonPessoaS 

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jacksonpessoas)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jackson-pessoa-soares)


Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato!