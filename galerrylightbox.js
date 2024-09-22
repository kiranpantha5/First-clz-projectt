

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function showLightbox(index) {
        const images = Array.from(galleryItems);
        if (index >= 0 && index < images.length) {
            currentIndex = index;
            const img = images[index];
            lightboxImg.src = img.getAttribute('data-large');
            caption.textContent = img.alt;
            lightbox.style.display = 'flex';
        }
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            showLightbox(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < galleryItems.length - 1) {
            showLightbox(currentIndex + 1);
        }
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Optional: Allow navigating with keyboard arrows
    document.addEventListener('keydown', function (event) {
        if (lightbox.style.display === 'flex') {
            if (event.key === 'ArrowLeft') {
                prevBtn.click();
            }
            if (event.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
});

