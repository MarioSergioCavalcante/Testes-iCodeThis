
const botao = document.querySelector('.cartao__botao');
botao.addEventListener('click', function () {
  
    var texto = document.querySelector('.quantidade').textContent;
    
    let numero = (texto.split("l")[0]).split(",");
    let valor = parseFloat(numero[0] + "." + numero[1]);
    var ativo = document.querySelector('.active');
    if (valor + 0.5 <= 1) {

        ativo.lastChild.classList.remove('grande');
        ativo.lastChild.classList.add('pequeno');
    } else {
        if (valor + 0.5 <= 2) {
            ativo.lastChild.classList.remove('pequeno');
            ativo.lastChild.classList.add('medio');
        } else {

            ativo.lastChild.classList.remove('medio');
            ativo.lastChild.classList.add('grande');

        }
    }
    valor = (valor + 0.5).toFixed(1) + "l";
    
    document.querySelector('.quantidade').textContent = valor.split(".")[0] + "," + valor.split(".")[1] + " of 2l";
});
