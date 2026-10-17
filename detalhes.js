const nomeRestaurante = "Boca Chilli"
const urlAPI = `https://tech4produtos.fly.dev/produtos/restaurante=${nomeRestaurante}`

async function exibirDetalhes() {
    const hash = location.hash

    if (!hash) return

    const resposta = await fetch(urlAPI)
    const produtos = await resposta.json()
    const meusProdutos = produtos.filter(item => item.restaurante === nomeRestaurante)

    const indice = Number(hash.replace("#det", "")) - 1
    const produtoSelecionado = meusProdutos[indice]

    if (!produtoSelecionado) return

    const idRealAPI = produtoSelecionado.id || produtoSelecionado._id
    const respostaDetalhe = await fetch(`https://tech4produtos.fly.dev/produtos/${idRealAPI}`)
    const dados = await respostaDetalhe.json()

    const cardElemento = document.querySelector(hash)
    if (cardElemento) {
        cardElemento.innerHTML = `
            <h2>${dados.produto}</h2>
            <img src="${dados.imagem}" alt="${dados.produto}" class="img-fluid">
            <p class="paqua">${dados.descricao}</p>
            <a href="#comprar" class="btn"><button class="bnt c">Comprar</button></a>
        `;
    }
}

exibirDetalhes()