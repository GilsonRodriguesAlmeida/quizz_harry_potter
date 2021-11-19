//estética buzzfeed
//tema: Qual a sua casa no Hary Potter?
//perguntas e respostas
class Perguntas {
    constructor(titulo, alternativas) {
        this.titulo = titulo;
        this.alternativas = alternativas;
    }
}

class Alternativa {
    constructor(titulo, pontuacao) {
        this.titulo = titulo;
        this.pontuacao = pontuacao;
    }
}

let perguntas = [
    new Perguntas(
        titulo = "Escolha uma ferramenta de limpeza/cuidado doméstico para jogar Quadribol:",
        alternativas = [
            new Alternativa(titulo = "Ancinho", pontuacao = 3),
            new Alternativa(titulo = "Esfregão", pontuacao = 0),
            new Alternativa(titulo = "Roomba", pontuacao = 2),
            new Alternativa(titulo = "Aspirador de pó", pontuacao = 1)]),
    new Perguntas(
        titulo = "Escolha uma cor:",
        alternativas = [
            new Alternativa(titulo = "Verde", pontuacao = 1),
            new Alternativa(titulo = "Azul", pontuacao = 3),
            new Alternativa(titulo = "Amarelo", pontuacao = 2),
            new Alternativa(titulo = "Vermelho", pontuacao = 0)]),
    new Perguntas(
        titulo = "Você é um bruxo?",
        alternativas = [
            new Alternativa(titulo = "sim", pontuacao = 1),
            new Alternativa(titulo = "não", pontuacao = 0)]),
    new Perguntas(
        titulo = "Escolha um feitiço",
        alternativas = [
            new Alternativa(titulo = "Expectro petroleum", pontuacao = 1),
            new Alternativa(titulo = "Hocus Pocus", pontuacao = 3),
            new Alternativa(titulo = "Havada cadebera", pontuacao = 2)]),
    new Perguntas(
        titulo = "Você está usando meias?",
        alternativas = [
            new Alternativa(titulo = "sim", pontuacao = 1),
            new Alternativa(titulo = "não", pontuacao = 0)]),
]

totalPontos = 0
let perguntasHtml = document.getElementById("perguntas")

for (let i in perguntas) {
    let pergunta = perguntas[i]
    let alternativas = ""

    for (index in pergunta.alternativas) {
        alternativas += `<input type="radio" id="alternativa${index}"
        name="${i}" value="${pergunta.alternativas[index].pontuacao}">
        <label for="alternativas${index}">${pergunta.alternativas[index].titulo}</label><br/>`
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
    let botaoHtml = document.getElementById("verResultado")
    botaoHtml.style.display = "none";

    for (let elemento of document.querySelectorAll('input[type="radio"]:checked')) {
        pontos += parseInt(elemento.value)
    }
    if (pontos <= 2) {
        resultadoHtml.innerHTML = `<span class="grifinoria">Você é da casa Grifinória com ${pontos} pontos`
    }
    if (pontos >= 3 && pontos <= 5) {
        resultadoHtml.innerHTML = `<span class="sonserina">Você é da casa Sonserina com ${pontos} pontos`
    }
    if (pontos >= 6 && pontos <= 8) {
        resultadoHtml.innerHTML = `<span class="lufalufa">Você é da casa Lufa Lufa com ${pontos} pontos`
    }
    if (pontos >= 9) {
        resultadoHtml.innerHTML = `<span class="corvinal">Você é da casa Corvinal com ${pontos} pontos</span>`
    }
}