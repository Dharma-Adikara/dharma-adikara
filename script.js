// JavaScript - Karang Taruna DHARMA ADIKARA

// Carousel Berita
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideContainer = document.getElementById('carouselSlide');
    if (!slideContainer) return;

    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

if (slides.length > 0) {
    setInterval(() => {
        nextSlide();
    }, 4000);
}

// Animasi masuk untuk section halaman
const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
}

// Form WhatsApp Kontak
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const targetWA = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
        const textWA = `Halo Karang Taruna Dharma Adikara,%0ANama: ${name}%0AEmail: ${email}%0A%0A*Pesan/Kritik/Saran:*%0A${message}`;

        window.open(`https://wa.me/${targetWA}?text=${textWA}`, '_blank');
    });
}

function vote(type) {
    const voteButtons = document.querySelectorAll('.emoji-btn');
    const successMessage = document.getElementById('feedbackSuccess');

    voteButtons.forEach((button) => {
        const isSelected = button.dataset.vote === type;
        button.classList.toggle('is-selected', isSelected);
        button.disabled = isSelected;
    });

    if (successMessage) {
        successMessage.hidden = false;
    }
}