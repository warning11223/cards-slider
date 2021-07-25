const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearClasses();
        slide.classList.add('active')
    })
}

function clearClasses () {
    slides.forEach((item) => {
        item.classList.remove('active')
    })
}