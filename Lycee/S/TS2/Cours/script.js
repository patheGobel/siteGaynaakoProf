// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les boutons de basculement de correction
    const buttons = document.querySelectorAll('.toggle-correction-btn');

    // Pour chaque bouton, ajouter un écouteur d'événement au clic
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Trouver le conteneur de correction associé à ce bouton
            // C'est le prochain élément frère qui a la classe 'correction-content'
            const correctionContent = this.nextElementSibling;

            // Basculer la visibilité de la correction
            if (correctionContent.style.display === 'none') {
                correctionContent.style.display = 'block'; // Afficher la correction
                this.textContent = 'Masquer la Correction'; // Changer le texte du bouton
            } else {
                correctionContent.style.display = 'none'; // Masquer la correction
                this.textContent = 'Afficher la Correction'; // Changer le texte du bouton
            }
        });
    });
});