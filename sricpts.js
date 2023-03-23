
function trocaCor(cor) {
    let circulo = document.querySelector(".circulo") //chamar o html e procura pelo elemento circulo
    circulo.style.background = cor //pede pra trocar o background do elemento circulo
}

function trocaImagem(imagem) {

    let imgiPhone = document.querySelector(".imgiphone")
    imgiPhone.src = imagem
}