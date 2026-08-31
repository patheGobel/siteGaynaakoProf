function toggleExemple(element) {

    const contenu = element.nextElementSibling;

    contenu.classList.toggle("visible");

    element.classList.toggle("ouvert");

}