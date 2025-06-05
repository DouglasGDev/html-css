    async function carregaDocumento(arquivo, target) {
        const el = document.querySelector(target);
        if (!el) return;

        try {
            const resposta = await fetch(arquivo);
            if (!resposta.ok) throw new Error("Erro ao carregar " + arquivo);
            const conteudo = await resposta.text();
            el.innerHTML = conteudo;
        } catch (erro) {
            console.error(erro);
        }
    }

    async function inicializarPagina() {
        document.body.style.visibility = "hidden";
        await carregaDocumento("./assets/template/bot.html", "#mainbot");
        await carregaDocumento("./assets/template/cabecalho.html", "#mainheader");
        await carregaDocumento("./assets/template/rodape.html", "#mainfooter");

        // Atualiza o ano
        const anoAtual = new Date().getFullYear();
        const spanAno = document.getElementById("ano");
        if (spanAno) {
            spanAno.textContent = anoAtual;
        }

        // Mostra a página depois de tudo carregado
        document.body.style.visibility = "visible";
    }

    inicializarPagina();