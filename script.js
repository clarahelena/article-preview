const botao1 = document.querySelector('.div-irma');
const botao2 = document.querySelector('.div-irma-mobile');
const secao = document.querySelector('.share');
const minimals = document.querySelector('.minimals');
const minimalsMobile = document.querySelector('.minimals-mobile');
console.log(botao2);


function share() {
    if (window.innerWidth >= 900) {
        secao.classList.toggle('hoa');
    } else {
        secao.classList.remove('hoa');
         minimals.style.display = "none";
         minimalsMobile.style.display = "flex";
    }
}

function shareMobile() {
    minimals.style.display = "flex";
    minimalsMobile.style.display = "none";
}

botao1.addEventListener('click', share);
botao2.addEventListener('click', shareMobile);

