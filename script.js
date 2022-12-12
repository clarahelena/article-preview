const botao = document.querySelector('.div-irma');
const secao = document.querySelector('.share');
console.log(secao);
function evento() {
    secao.classList.toggle('hoa');
}
botao.addEventListener('click', evento);
