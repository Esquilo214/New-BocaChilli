const nomeRestaurante = "Boca Chilli"
const urlAPI = `https://tech4produtos.fly.dev/produtos/restaurante=${nomeRestaurante}`

async function buscarProduto() {
    const resposta = await fetch(urlAPI)
    const produtos = await resposta.json()

    const meusProdutos = produtos.filter(item => item.restaurante === nomeRestaurante)

    const containerCards = document.querySelector(".container-cards2")

    containerCards.innerHTML = ""

    meusProdutos.forEach((item, index) => {
        const cardHTML = `
            <div class="card" style="width: 18rem;" id="card${index + 1}">
                <img src="${item.imagem}" class="card-img-top" alt="${item.produto}">
                <div class="card-body">
                    <h5 class="card-title">${item.produto}</h5>
                    <p class="card-text">${item.descricao}</p>
                    <a href="detalhes.html#det${index + 1}" class="btn"><button class="bnt c">Detalhes</button></a>
                </div>
            </div>
        `

        containerCards.innerHTML += cardHTML
    })
}

buscarProduto()

//OBS: Não foi requisitado criação de um preço para o Postman, então eu não criei. (Os preços anteriores não serão exibidos.)