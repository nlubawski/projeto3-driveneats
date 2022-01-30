let prato = null
let bebida = null
let sobremesa = null
let pratoPreco = null
let bebidaPreco = null
let sobremesaPreco = null
let valorTotal = null

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

    const confirmacaoTotal = document.querySelector('.confirmacao__total__preco')
    const preco = total()

    confirmacaoTotal.innerHTML = preco


    
}

function cancelar(){

        const botaoCancelar = document.querySelector('.fundo-pedido')
        botaoCancelar.classList.add('escondido')
}

function total(){
    
    pratoPreco = parseFloat(pratoPreco.replace(',', '.'))
    bebidaPreco = parseFloat(bebidaPreco.replace(',', '.'))
    sobremesaPreco = parseFloat(sobremesaPreco.replace(',', '.'))

    valorTotal = pratoPreco + bebidaPreco + sobremesaPreco
    valorTotal = valorTotal.toFixed(2)
    valorTotal = valorTotal.replace('.', ',')

    return valorTotal

}

function pedidoConfirmado(){
    const nome = prompt("Qual seu nome? ")
    const endereco = prompt("Qual seu endereço? ")

    let texto =`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    window.open(`https://wa.me/5514996336130?text=${encodeURIComponent(texto)}`);
    

}
