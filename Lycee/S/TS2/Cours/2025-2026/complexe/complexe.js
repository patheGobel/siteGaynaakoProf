document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-correction').forEach((button) => {
        button.addEventListener('click', () => {
            const correction = button.nextElementSibling; // <div class="correction"> juste après
            if (!correction) return;
            const hidden = getComputedStyle(correction).display === 'none';
            correction.style.display = hidden ? 'block' : 'none';
            button.textContent = hidden ? 'Masquer la correction' : 'Afficher la correction';

            // Si la correction contient du LaTeX, on (re)typeset après affichage
            if (hidden && window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise([correction]);
            }
        });
    });
});