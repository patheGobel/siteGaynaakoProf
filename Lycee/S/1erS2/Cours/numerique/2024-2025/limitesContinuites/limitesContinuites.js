function toggleExemple(element) {

    const contenu = element.nextElementSibling;

    contenu.classList.toggle("visible");
    element.classList.toggle("ouvert");
}


function toggleSolution(element) {

    const contenu = element.nextElementSibling;

    contenu.classList.toggle("visible");
    element.classList.toggle("ouvert");
}

/* =========================================================
   AFFICHER / MASQUER UN EXERCICE
   ========================================================= */

function toggleExercice(element) {

    const contenu = element.nextElementSibling;

    contenu.classList.toggle("visible");
    element.classList.toggle("ouvert");

}


/* =========================================================
   AFFICHER / MASQUER UNE CORRECTION
   ========================================================= */

function toggleSolution(element) {

    const contenu = element.nextElementSibling;

    contenu.classList.toggle("visible");
    element.classList.toggle("ouvert");

}