const parametrosNaUrl = new URLSearchParams(window.location.search)
const id = parametrosNaUrl.get('id')

const urlAPI = `https://tech4produtos.fly.dev/produtos/${id}`

const buscarPorId = async () => {
    const resposta = await fetch(`${apiUrl}`)
    const produto = await resposta.json() 
    return produto;
}

async function detalheproduto() {
    const produto = await buscarPorId()
    const divDetalhes = document.getElementById("det1")
    divDetalhes.innerHTML = `
            <h2>${produto.nome}</h2>
            <img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid">
            <p class="paqua">${produto.descricao}</p>
            <a href="detalhes.html#comprar" class="btn"><button class="bnt c">Comprar</button></a>
    `
}

detalheproduto()