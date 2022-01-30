function selecionarPrato(classeSelecionada){
    const selecionadoP = document.querySelector(".selecionado")

    if (selecionadoP  != null){
        selecionadoP.classList.remove("selecionado")
    }

    const pratoEscolhido = document.querySelector("." + classeSelecionada)
    pratoEscolhido.classList.add("selecionado")
    
}

function selecionarBebida(classeSelecionada){
    const selecionadoB = document.querySelector(".selecionado")

    if (selecionadoB  != null){
        selecionadoB.classList.remove("selecionado")
    }

    const bebidaEscolhida = document.querySelector("." + classeSelecionada)
    bebidaEscolhida.classList.add("selecionado")
    
}