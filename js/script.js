const API_KEY = "143e25fb12374c0987f3ad4112f7c74b";

let config = {
    method: "GET"
}

let boardNoticias = document.querySelector('#boardNoticias')
let btnCarregar = document.querySelector('#carregar')

function mostrarNaTela(listaNoticias){
    listaNoticias.forEach((noticia)=>{
        let novaNoticia =
        `<div class="col-md-4">
        <div class="card-group">
            <div class="card">
                <img class="card-img-top" src="${noticia.urlToImage}" alt="Imagem da noticia">
                    <div class="card-body text-justify">
                    <h5 class="card-title text-center">${noticia.title}</h5>
                    <p class="card-text">${noticia.description}</p>
                <button class="btn btn-secondary"> Ver notícia Completa</button>
                    </div>
                </div>
                </div>
            </div>`

            boardNoticias.insertAdjacentHTML('beforeend', novaNoticia)
    })

}
    
    btnCarregar.onclick = () => {
        let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
            .then((resposta)=>{
                return resposta.json()
        })

        .then((json)=>{
            console.log(json.articles[0])
            mostrarNaTela(json.articles)
        })
    }


 