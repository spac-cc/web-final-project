function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === '' || navLinks.style.display === 'none') {
            navLinks.style.display = 'grid';
        } else {
            navLinks.style.display = 'none';
        }
    }
    