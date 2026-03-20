const setup = () => {
    const voegToe = () => {
        // Nieuw p-element aanmaken via createElement
        let nieuwP = document.createElement("p");
        nieuwP.textContent = "Dit is een nieuw p-element!";
        // Toevoegen aan myDIV via appendChild
        document.getElementById("myDIV").appendChild(nieuwP);
    };

    document.getElementById("btnVoegToe").addEventListener("click", voegToe);
};

window.addEventListener("load", setup);
