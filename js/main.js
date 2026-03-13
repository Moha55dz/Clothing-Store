// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animate sections and cards
    const animatedElements = document.querySelectorAll('.section, .product-card, .hero h1, .hero p');
    animatedElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Category Filtering (Shop Page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.innerText.toLowerCase();

            products.forEach(product => {
                const category = product.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    product.style.display = 'block';
                    setTimeout(() => product.style.opacity = '1', 10);
                } else {
                    product.style.opacity = '0';
                    setTimeout(() => product.style.display = 'none', 300);
                }
            });
        });
    });

    // Size Selector Logic (Product Page)
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Image Zoom Functionality
    const zoomImg = document.getElementById('zoom-img');
    if (zoomImg) {
        zoomImg.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = zoomImg.getBoundingClientRect();
            const x = ((e.pageX - left) / width) * 100;
            const y = ((e.pageY - top) / height) * 100;
            zoomImg.style.transformOrigin = `${x}% ${y}%`;
            zoomImg.style.transform = 'scale(2)';
        });

        zoomImg.addEventListener('mouseleave', () => {
            zoomImg.style.transform = 'scale(1)';
        });
    }

    // Mobile Menu Toggle (to be added to nav in HTML)
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn bebas-font';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.innerText = 'MENU';
    document.querySelector('nav').appendChild(mobileMenuBtn);

    const navLinks = document.querySelector('.nav-links');
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });
});
