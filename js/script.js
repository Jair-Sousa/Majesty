
// Botão topo 
window.addEventListener('scroll', function(){
    var botao = document.querySelector('.botao-topo');
    if(window.scrollY > 300){
        botao.style.display = 'block';
    }else{
        botao.style.display = 'none';
    }
});


// Carrosselel 
const comments = document.querySelectorAll('.comment');

function mostrarSlide(index) {
    comments.forEach((comment, i) => {
        comment.style.display = i === index ? 'block' : 'none';
    });
}

function escolherAleatorio() {
    const randomIndex = Math.floor(Math.random() * comments.length);
    mostrarSlide(randomIndex);
}

document.querySelector('.anterior').addEventListener('click', escolherAleatorio);
document.querySelector('.proximo').addEventListener('click', escolherAleatorio);

// Mostra um estudante aleatório ao carregar a página
escolherAleatorio();
