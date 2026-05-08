// Smooth scrolling for nav dots
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionIndex = parseInt(dot.dataset.section);
        const sections = ['#hero', '#about', '#projects', '#contact'];
        document.querySelector(sections[sectionIndex]).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update active nav dot
window.addEventListener('scroll', () => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const navDots = document.querySelectorAll('.nav-dot');
    
    let current = '';
    sections.forEach(section => {
        const el = document.getElementById(section);
        if (el.offsetTop < window.scrollY + 200) {
            current = section;
        }
    });
    
    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href') === '#' + current || dot.dataset.section === sections.indexOf(current).toString()) {
            dot.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Hero profile hover
document.querySelector('.hero-profile')?.addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty('--mouse-x', `${x}px`);
    e.target.style.setProperty('--mouse-y', `${y}px`);
});
