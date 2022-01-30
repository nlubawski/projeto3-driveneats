function selecionarPrato(classeSelecionada){
    const selecionadoP = document.querySelector(".prato .selecionado")

    if (selecionadoP  != null){
        selecionadoP.classList.remove("selecionado")
    }

    const pratoEscolhido = document.querySelector("." + classeSelecionada)
    pratoEscolhido.classList.add("selecionado")
    
}

function selecionarBebida(classeSelecionada){
    const selecionadoB = document.querySelector(".bebida .selecionado ")

    if (selecionadoB  != null){
        selecionadoB.classList.remove("selecionado")
    }

    const bebidaEscolhida = document.querySelector("." + classeSelecionada)
    bebidaEscolhida.classList.add("selecionado")
    
}

function selecionarSobremesa(classeSelecionada){
    const selecionadoS = document.querySelector(".sobremesa .selecionado")

    if (selecionadoS  != null){
        selecionadoS.classList.remove("selecionado")
    }

    const sobremesaEscolhida = document.querySelector("." + classeSelecionada)
    sobremesaEscolhida.classList.add("selecionado")
    
}
