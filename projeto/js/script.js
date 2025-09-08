const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;
let slideInterval;



function showTestimonial(index) {
    testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
});
}



function startSlideShow() {
  // Limpa intervalo existente antes de criar novo
    stopSlideShow();
    slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
    }, 7000);
}

function stopSlideShow() {
    if (slideInterval) {
    clearInterval(slideInterval);
}
}

// Inicializa mostrando o primeiro testimonial
showTestimonial(currentIndex);

// Adiciona event listeners com verificação de existência
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
        startSlideShow(); // Reinicia o slideshow após interação
});
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
        startSlideShow(); // Reinicia o slideshow após interação
});
}

// Inicia o slideshow automático
startSlideShow();



//------------------------------------------------

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}
