// Função para realizar o login do usuário
function realizarLogin() {
    // Obter valores dos campos do formulário de login
    var nomeCompletoLogin = document.getElementById("nomeCompletoLogin").value;
    var senhaLogin = document.getElementById("senhaLogin").value;

    // Recuperar informações do usuário armazenadas no navegador
    var usuarioArmazenado = JSON.parse(localStorage.getItem("usuario"));

    // Verificar se as informações de login correspondem às informações armazenadas
    if (usuarioArmazenado) {
        if (usuarioArmazenado.nomeCompleto === nomeCompletoLogin && usuarioArmazenado.senha === senhaLogin) {
            // Login bem-sucedido
            alert("Login bem-sucedido! Bem-vindo, " + nomeCompletoLogin + "!");
            // Redirecionar o usuário para a página do site
            window.location.href = "central.html"; // Substitua "pagina_do_site.html" pelo nome do arquivo da página do seu site
        } else {
            // Login falhou
            alert("Nome completo ou senha incorretos. Por favor, tente novamente.");
        }
    } else {
        // Usuário não cadastrado
        alert("Usuário não cadastrado. Por favor, realize o cadastro antes de fazer login.");
    }

    // Limpar campos do formulário após o login
    document.getElementById("loginForm").reset();
}