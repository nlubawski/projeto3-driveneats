function selecionar(classeSelecionada){
    const selecionado = document.querySelector(".selecionado")

    if (selecionado  != null){
        selecionado.classList.remove("selecionado")
    }

    const pratoEscolhido = document.querySelector("." + classeSelecionada)
    pratoEscolhido.classList.add("selecionado")
    
}