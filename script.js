var header = document.getElementById('Header');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    if (scroll > 10) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        header.style.backdropFilter = "blur(8px)"; 
    } else {
        header.style.backgroundColor = '#121212';
        header.style.backdropFilter = "none";
    }    
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section, .imag, .titulo").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});

document.querySelectorAll('.item').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});