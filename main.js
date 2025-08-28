// função que permite a troca de tema
function mudarCor() {
    document.body.classList.toggle('tema-alternativo');
}

// faz a rolagem suave
scrollTo({
    top: 1000,
    behavior: 'smooth',
});

// configuração do carrossel
const track    = document.querySelector('.carrossel-track');  // container do carrossel
const slides   = Array.from(track.children);                  // array com as imagens
const nextBtn  = document.querySelector('.next');             // botão “próximo”
const prevBtn  = document.querySelector('.prev');             // botão “anterior”
const dots     = document.querySelectorAll('.dot');           // indicadores (bolinhas)

let currentIndex = 0;  // índice atual do slide

// atualiza o carrossel para o slide de índice passado
function updateCarrossel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// avançar um slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrossel(currentIndex);
});

// retroceder um slide
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarrossel(currentIndex);
});

// clicar em um indicador
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarrossel(currentIndex);
    });
});

// troca automática a cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrossel(currentIndex);
}, 5000);
