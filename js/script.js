function exibirMensagem(event) {
    event.preventDefault();
    
    const nome = document.getElementById("login-nome").value;
    const duvida = document.getElementById("login-duvida").value;
    const matricula = document.getElementById("login-matricula").value;
    
    if (nome === "" || duvida === "" || matricula === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        const mensagem = "Sua pergunta foi enviada com sucesso!";
        document.getElementById("saida").innerHTML = mensagem;
        alert(mensagem);
        
        document.getElementById("login-nome").value = "";
        document.getElementById("login-duvida").value = "";
        document.getElementById("login-matricula").value = "";
    }
}