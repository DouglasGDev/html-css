function carregaDocumento(arquivo, target, callback)
{
    var el = document.querySelector(target);

    // Se o elemento não existir então não requisita
    if (!el) return;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", arquivo, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
            el.innerHTML = xhr.responseText;

            // Chama o callback depois de carregar o HTML
            if (typeof callback === "function") {
                callback();
            }
        }
    };

    xhr.send(null);
}

// Usa o callback para atualizar o ano depois que o rodapé for carregado
carregaDocumento("./assets/template/cabecalho.html", "#mainheader");
carregaDocumento("./assets/template/rodape.html", "#mainfooter", 
    function () {
    const anoAtual = new Date().getFullYear();
    const spanAno = document.getElementById("ano");
    if (spanAno) {
        spanAno.textContent = anoAtual;
    }
});
