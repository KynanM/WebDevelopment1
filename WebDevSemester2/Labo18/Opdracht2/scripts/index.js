const setup = () => {
    // Gebruik querySelectorAll om het p-element te vinden en tekst te wijzigen
    let p = document.querySelectorAll("p")[0];
    p.textContent = "Goed gedaan!";
};

window.addEventListener("load", setup);
