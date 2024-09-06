$(document).ready(function() {
    $('.menu-link').click(function() {
        $('nav ul').toggleClass('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateNavButtons();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Créer les boutons de navigation
    const sliderNav = document.createElement('div');
    sliderNav.className = 'slider-nav';
    for (let i = 0; i < slideCount; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => goToSlide(i));
        sliderNav.appendChild(button);
    }
    document.querySelector('.slider-container').appendChild(sliderNav);

    function updateNavButtons() {
        const buttons = sliderNav.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('active', i === currentIndex);
        }
    }

    // Défilement automatique (optionnel)
    setInterval(nextSlide, 5000); // Change de slide toutes les 5 secondes

    // Initialisation
    updateNavButtons();
});