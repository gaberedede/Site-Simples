document.getElementById("meuFormulario").onsubmit = function () {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
};
