
function cadastrarUsuario() {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var nomeUsuario = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("email").value;
    var senhaCadastro = document.getElementById("senhaCadastro").value;

    var usuario = {
        nomeCompleto: nomeCompleto,
        nomeUsuario: nomeUsuario,
        email: email,
        senha: senhaCadastro 
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    document.getElementById("cadastroForm").reset();

    alert("Cadastro realizado com sucesso!");
}

function realizarLogin() {
    
    var nomeCompletoLogin = document.getElementById("nomeCompletoLogin").value;
    var senhaLogin = document.getElementById("senhaLogin").value;

    
    var usuarioArmazenado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioArmazenado && usuarioArmazenado.nomeCompleto === nomeCompletoLogin && usuarioArmazenado.senha === senhaLogin) {
      
        alert("Login bem-sucedido! Bem-vindo, " + nomeCompletoLogin + "!");
    } else {
       
        alert("Nome completo ou senha incorretos. Por favor, tente novamente.");
    }

   
    document.getElementById("loginForm").reset();
}