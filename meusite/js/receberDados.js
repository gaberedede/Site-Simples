window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const email = params.get("email");
    const idade = params.get("idade");

    if (!nome && !email && !idade) {
        document.getElementById("dadosRecebidos").innerHTML = `
            <p>Nenhum dado recebido por enquanto.</p>
        `;
    } else {
        document.getElementById("dadosRecebidos").innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Idade:</strong> ${idade}</p>
        `;
    }
};
