/**
 * Component Loader for TrueNest
 * Dynamically loads shared HTML components into placeholders.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    const headerPlaceholder = document.getElementById('shared-header');
    if (headerPlaceholder) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                initNavScroll();
            })
            .catch(error => console.error('Error loading header:', error));
    }

    // Load Footer
    const footerPlaceholder = document.getElementById('shared-footer');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    /**
     * Navigation Scroll Logic
     * Centralized logic for glassmorphism effect on scroll
     */
    function initNavScroll() {
        const nav = document.querySelector('nav.fixed.top-0');
        if (!nav) return;

        const updateNav = () => {
            if (window.scrollY > 50) {
                nav.classList.remove('bg-transparent', 'border-transparent');
                nav.classList.add('bg-white/60', 'backdrop-blur-md', 'border-outline/10', 'shadow-sm');
            } else {
                nav.classList.add('bg-transparent', 'border-transparent');
                nav.classList.remove('bg-white/60', 'backdrop-blur-md', 'border-outline/10', 'shadow-sm');
            }
        };

        window.addEventListener('scroll', updateNav);
        updateNav(); // Initial call
    }
});
