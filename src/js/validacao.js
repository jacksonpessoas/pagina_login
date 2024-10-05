// Lista de usuários autorizados
const usuariosAutorizados = [
    { login: 'admin', senha: 'admin' },
    { login: 'jackson', senha: '12345' },
    
    
    // Adicione mais usuários conforme necessário
];

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Verifica se o login e a senha correspondem a um dos usuários autorizados
    const usuarioValido = usuariosAutorizados.some(usuario => usuario.login === login && usuario.senha === senha);

    if (usuarioValido) {
        alert('Login bem-sucedido!');
        localStorage.setItem('usuarioLogin', login); // Salva o login no localStorage
        window.location.href = "src/paginas/home.html"; // Redireciona para a página de cadastro
        return false; // Evita o envio do formulário
    } else {
        alert('Usuário ou senha incorretos');
        return false; // Mantém na tela de login
    }
}



