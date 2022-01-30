let prato = null
let bebida = null
let sobremesa = null
let pratoPreco = null
let bebidaPreco = null
let sobremesaPreco = null

function selecionarPrato(classeSelecionada, nomePrato, preco){
    const selecionadoP = document.querySelector(".prato .selecionado")

    if (selecionadoP  != null){
        selecionadoP.classList.remove("selecionado")
    }

    const pratoEscolhido = document.querySelector("." + classeSelecionada)
    pratoEscolhido.classList.add("selecionado")

    prato = nomePrato
    pratoPreco = preco
    confimar()
}

function selecionarBebida(classeSelecionada, nomeBebida, preco){
    const selecionadoB = document.querySelector(".bebida .selecionado ")

    if (selecionadoB  != null){
        selecionadoB.classList.remove("selecionado")
    }

    const bebidaEscolhida = document.querySelector("." + classeSelecionada)
    bebidaEscolhida.classList.add("selecionado")

    bebida = nomeBebida
    bebidaPreco = preco
    confimar()
    
}

function selecionarSobremesa(classeSelecionada, nomeSobremesa, preco){
    const selecionadoS = document.querySelector(".sobremesa .selecionado")

    if (selecionadoS  != null){
        selecionadoS.classList.remove("selecionado")
    }

    const sobremesaEscolhida = document.querySelector("." + classeSelecionada)
    sobremesaEscolhida.classList.add("selecionado")

    sobremesa = nomeSobremesa
    sobremesaPreco = preco
    confimar()
    
}


function confimar(){
    if (prato !== null & bebida !== null & sobremesa !== null){
        const botao = document.querySelector('.selecionar')
        botao.classList.add('escondido')

        const botaoAtivado = document.querySelector('.botao-fechar-pedido')
        botaoAtivado.classList.remove('escondido')

    }
        
}

function fecharPedido(){
    const telaConfirmacao = document.querySelector('.fundo-pedido')
    telaConfirmacao.classList.remove('escondido')

    const pratoDescricao = document.querySelector('.confirmacao__prato__descricao')
    pratoDescricao.innerHTML = prato

    const pratoValor = document.querySelector('.confirmacao__prato__preco')
    pratoValor.innerHTML = pratoPreco

    const bebidaDescricao = document.querySelector('.confirmacao__bebida__descricao')
    bebidaDescricao.innerHTML = bebida

    const bebidaValor = document.querySelector('.confirmacao__bebida__preco')
    bebidaValor.innerHTML = bebidaPreco

    const sobremesaDescricao = document.querySelector('.confirmacao__sobremesa__descricao')
    sobremesaDescricao.innerHTML = sobremesa

    const sobremesaValor = document.querySelector('.confirmacao__sobremesa__preco')
    sobremesaValor.innerHTML = sobremesaPreco
    
}

