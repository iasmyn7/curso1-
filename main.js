const botoes=document.querySelectorAll(".botao");// variavel que armazena todos os itens com a classe botão 


for(let i=0;i) <botoes.length;i++){// lopp que executa enquanto j<quantidade de botoes

    botoes[i] .onclick = function(){ //cria uma função

        for(let j= 0;j<botoes.length;j++){//lopp que executa enquanto j<quantidade de botoes
            botoes[j].classList.remove("ativo"); //remove a palavra da classe.
        }
        
        botoes[i].classList.add("ativo");//adicina a palavra ativo da classe.
    }
    console.log();
}