//estética buzzfeed
//tema: Qual a sua casa no Hary Potter?
//perguntas e respostas
class Perguntas {
    constructor(titulo, alternativas) {
        this.titulo = titulo;
        this.alternativas = alternativas;
    }
}
let perguntas = [
    new Perguntas(titulo = "Escolha uma ferramenta de limpeza/cuidado doméstico para jogar Quadribol:",
        alternativas = ["Ancinho", "Esfregão", "Vaporizador", "Roomba", "Aspirador de pó"]),
    new Perguntas(titulo = "Escolha uma cor:", 
        alternativas = ["Verde", "Azul", "Amarelo", "Vermelho"]),
    new Perguntas(titulo = "Você é um bruxo?", 
        alternativas = ["sim", "não"]),
    new Perguntas(titulo = "Escolha um feitiço", 
        alternativas = ["Expectro petroleum", "Hocus Pocus", "Havada cadebera"]),
    new Perguntas(titulo = "Você está usando meias?", 
        alternativas = ["sim", "não"])
]
totalPontos = 0
let perguntasHtml = document.getElementById("perguntas")

for (let i in perguntas) {
    let pergunta = perguntas[i]
    let alternativas = ""

    for (index in pergunta.alternativas) {
        alternativas += `<input type="radio" id="alternativa${index}" 
        name="${i}" value="${index}">
        <label for="alternativas${index}">${pergunta.alternativas[index]}</label><br/>`
    }

    perguntasHtml.innerHTML += `<div class="pergunta">
                                    <div class="titulo">${pergunta.titulo}</div>
                                    <div class="alternativas">${alternativas}</div>
                                </div>`
    totalPontos += pergunta.alternativas.length
}

function corrigir() {
    let pontos = 0
    let resultadoHtml = document.getElementById("resultado")

    for(let elemento of document.querySelectorAll('input[type="radio"]:checked')) {
        pontos += parseInt(elemento.value)
    }
    if( pontos <= 2) {
        resultadoHtml.innerHTML = `Você é da casa Grifinória com ${pontos} pontos`
    }
    if( pontos >= 3 && pontos <= 5) {
        resultadoHtml.innerHTML = `Você é da casa Sonserina com ${pontos} pontos`
    }
    if( pontos >= 6 && pontos <= 8) {
        resultadoHtml.innerHTML = `Você é da casa Lufa Lufa com ${pontos} pontos`
    }
    if( pontos >= 9) {
        resultadoHtml.innerHTML = `Você é da casa Corvinal com ${pontos} pontos`
    }
}