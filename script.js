let prato = null
let bebida = null
let sobremesa = null

function selecionarPrato(classeSelecionada, nomePrato){
    const selecionadoP = document.querySelector(".prato .selecionado")

    if (selecionadoP  != null){
        selecionadoP.classList.remove("selecionado")
    }

    const pratoEscolhido = document.querySelector("." + classeSelecionada)
    pratoEscolhido.classList.add("selecionado")

    prato = nomePrato
    confimar()
}

function selecionarBebida(classeSelecionada, nomeBebida){
    const selecionadoB = document.querySelector(".bebida .selecionado ")

    if (selecionadoB  != null){
        selecionadoB.classList.remove("selecionado")
    }

    const bebidaEscolhida = document.querySelector("." + classeSelecionada)
    bebidaEscolhida.classList.add("selecionado")

    bebida = nomeBebida
    confimar()
    
}

function selecionarSobremesa(classeSelecionada, nomeSobremesa){
    const selecionadoS = document.querySelector(".sobremesa .selecionado")

    if (selecionadoS  != null){
        selecionadoS.classList.remove("selecionado")
    }

    const sobremesaEscolhida = document.querySelector("." + classeSelecionada)
    sobremesaEscolhida.classList.add("selecionado")

    sobremesa = nomeSobremesa
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


