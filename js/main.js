const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento)=> {
    elemento.addEventListener("click",(evento)=>{
        maniculaDados(evento.target.textContent, evento.target.parentNode);
    })
})

function maniculaDados(operacao,controle){
    const peca = controle.querySelector(".controle-contador");

    if(operacao ==="-"){
       if(peca.value>0){
        peca.value = parseInt(peca.value)-1;
       }
        
    }else {
        if(peca.value<99){
            peca.value = parseInt(peca.value)+1;
        }
    }

}

