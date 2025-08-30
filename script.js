// On attend que le DOM (Document Object Model) soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionne l'élément <li> avec la classe 'dropdown'
    const dropdown = document.querySelector('.dropdown');

    // Sélectionne le <div> avec la classe 'dropdown-content' qui est à l'intérieur du <li>
    const dropdownContent = document.querySelector('.dropdown-content');

    // Ajoute un écouteur d'événement pour le survol de la souris
    dropdown.addEventListener('mouseenter', () => {
        // Ajoute la classe 'visible' au contenu du menu pour l'afficher
        dropdownContent.classList.add('visible');
    });

    // Ajoute un écouteur d'événement lorsque la souris quitte l'élément
    dropdown.addEventListener('mouseleave', () => {
        // Retire la classe 'visible' pour le cacher
        dropdownContent.classList.remove('visible');
    });
});