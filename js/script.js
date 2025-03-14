
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
let commentAtual = Math.floor(Math.random() * comments.length);

function mostrarSlide(index) {
    comments.forEach((comment, i) => {
        comment.style.display = i === index ? 'block' : 'none';
    });
}

function proximo() {
    commentAtual = (commentAtual + 1) % comments.length;
    mostrarSlide(commentAtual);
}

function anterior() {
    commentAtual = (commentAtual - 1 + comments.length) % comments.length;
    mostrarSlide(commentAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostra um comentário aleatório ao carregar a página
mostrarSlide(commentAtual);
