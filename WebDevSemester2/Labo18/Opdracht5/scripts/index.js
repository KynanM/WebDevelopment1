const setup = () => {
    const sliderR = document.getElementById("sliderR");
    const sliderG = document.getElementById("sliderG");
    const sliderB = document.getElementById("sliderB");
    const swatch = document.getElementById("swatch");
    const btnSave = document.getElementById("btnSave");
    const savedColors = document.getElementById("savedColors");

    // Hoofdswatch bijwerken op basis van de drie sliders
    const updateSwatch = () => {
        swatch.style.backgroundColor =
            `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;
    };

    // Huidige kleur opslaan als nieuwe rechthoekige swatch
    const saveColor = () => {
        const kleur = `rgb(${sliderR.value}, ${sliderG.value}, ${sliderB.value})`;

        // Wrapper aanmaken (positie: relative, zodat X-knop absoluut geplaatst kan worden)
        const wrapper = document.createElement("div");
        wrapper.className = "saved-color-wrapper";

        // Rechthoekige gekleurde swatch aanmaken
        const savedSwatch = document.createElement("div");
        savedSwatch.className = "saved-swatch";
        savedSwatch.style.backgroundColor = kleur;

        // Klik op opgeslagen swatch: stel de sliders in op de bewaarde kleur
        savedSwatch.addEventListener("click", (event) => {
            // Gebruik currentTarget zodat altijd de swatch zelf wordt gebruikt
            const bgColor = event.currentTarget.style.backgroundColor;
            const match = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (match) {
                sliderR.value = match[1];
                sliderG.value = match[2];
                sliderB.value = match[3];
                updateSwatch();
            }
        });

        // X-knop aanmaken in de rechterbovenhoek
        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        btnDelete.textContent = "X";

        // Klik op X: verwijder de volledige wrapper via removeChild
        btnDelete.addEventListener("click", (event) => {
            const wrapperToRemove = event.currentTarget.parentNode;
            savedColors.removeChild(wrapperToRemove);
        });

        // Alles samenvoegen en toevoegen
        wrapper.appendChild(savedSwatch);
        wrapper.appendChild(btnDelete);
        savedColors.appendChild(wrapper);
    };

    // Sliders koppelen aan updateSwatch
    sliderR.addEventListener("input", updateSwatch);
    sliderG.addEventListener("input", updateSwatch);
    sliderB.addEventListener("input", updateSwatch);

    // Save-knop koppelen
    btnSave.addEventListener("click", saveColor);

    // Initiële kleur instellen bij laden
    updateSwatch();
};

window.addEventListener("load", setup);
