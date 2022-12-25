//Braço
// const subtrai__pontos__braco = document.querySelector('.subtrai__pontos__braco');
// const pontos__braço = document.querySelector('.pontos__braço');
// const adiciona__pontos__braco = document.querySelector('.adiciona__pontos__braco');


const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento)=> {
    elemento.addEventListener("click",(evento)=>{
        maniculaDados(evento.target.textContent, evento.target.parentNode);
    })
})

function maniculaDados(operacao,controle){
    const peca = controle.querySelector(".controle-contador");

    if(operacao ==="-"){
        peca.value = parseInt(peca.value)-1;
        
    }else {
        peca.value = parseInt(peca.value)+1;
    }

}




// function somanumero() {
//     let novoValor = Number(pontos__braço.value);
//     if (novoValor < 50) {
//         pontos__braço.value = novoValor + 1;
//       }
    
// }

// function subtrai() {
//     let novoValor = Number(pontos__braço.value);
//     if (novoValor > 0) {
//         pontos__braço.value = novoValor - 1;

//     }
// }
