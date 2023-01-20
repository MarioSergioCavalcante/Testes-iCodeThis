const cartao = document.querySelector('#cartao--claro');
const triangulo= document.querySelector('#triangulo--claro');
function Teste(){
    console.log('Teste');
    cartao.classList.toggle('esconder');
    console.log(cartao.classList);
    triangulo.classList.toggle('esconder');
}

function toggleVisualizacaoEscuro(){
    const cartao2 = document.querySelector('.cartao--escuro');
    const triangulo= document.querySelector('#triangulo--escuro');
    cartao2.classList.toggle('esconder');
    triangulo.classList.toggle('esconder');
}