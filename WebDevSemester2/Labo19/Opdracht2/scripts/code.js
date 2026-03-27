// ── Globale constanten en spelstatus ──────────────────────────────────────
let global = {
    AANTAL_HORIZONTAAL: 4,   // kolommen in het grid
    AANTAL_VERTICAAL: 3,     // rijen in het grid
    AANTAL_KAARTEN: 6,       // aantal verschillende kaartafbeeldingen
    WACHT_TIJD: 1000,        // ms wachttijd voor terugdraaien / verwijderen
    ACHTERKANT: "images/achterkant.png",

    // Spelstatus
    omgedraaid: [],          // array met max 2 omgedraaide kaarten (img-elementen)
    aantalParen: 0,          // hoeveel paren al gevonden
    isBusy: false            // blokkeert klikken tijdens de wachttijd
};

// ── Setup ─────────────────────────────────────────────────────────────────
const setup = () => {
    document.getElementById("btnNieuwSpel").addEventListener("click", nieuwSpel);
    document.getElementById("btnOpnieuw").addEventListener("click", nieuwSpel);
    nieuwSpel();
};

// ── Nieuw spel starten ────────────────────────────────────────────────────
const nieuwSpel = () => {
    global.omgedraaid = [];
    global.aantalParen = 0;
    global.isBusy = false;

    document.getElementById("eindscherm").classList.add("hidden");
    document.getElementById("aantalOmgedraaid").textContent = "Paren gevonden: 0 / " + global.AANTAL_KAARTEN;

    // Maak de kaartenpopulatie: elk kaartindex 2x
    let kaarten = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        kaarten.push(i);
        kaarten.push(i);
    }

    // Schud de kaarten (Fisher-Yates shuffle)
    for (let i = kaarten.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = kaarten[i];
        kaarten[i] = kaarten[j];
        kaarten[j] = temp;
    }

    // Bouw het speelveld opnieuw op
    let speelveld = document.getElementById("speelveld");
    speelveld.innerHTML = ""; // leegmaken

    for (let i = 0; i < kaarten.length; i++) {
        let img = document.createElement("img");
        img.className = "kaart";
        img.src = global.ACHTERKANT;
        img.setAttribute("data-kaartindex", kaarten[i]); // sla de kaartwaarde op
        img.addEventListener("click", onKaartKlik);
        speelveld.appendChild(img);
    }
};

// ── Klik op een kaart ────────────────────────────────────────────────────
const onKaartKlik = (event) => {
    // Blokkeer klikken als de game bezig is met wachten
    if (global.isBusy) return;

    let kaart = event.currentTarget;

    // Negeer klik op al omgedraaide of verwijderde kaart
    if (kaart.classList.contains("omgedraaid") ||
        kaart.classList.contains("verwijderd")) return;

    // Negeer als al 2 kaarten omgedraaid zijn (veiligheid)
    if (global.omgedraaid.length >= 2) return;

    // Draai de kaart om: toon de voorkant
    let index = kaart.getAttribute("data-kaartindex");
    kaart.src = "images/kaart" + index + ".png";
    kaart.classList.add("omgedraaid");
    global.omgedraaid.push(kaart);

    // Als 2 kaarten omgedraaid zijn, controleer of ze overeenkomen
    if (global.omgedraaid.length === 2) {
        controleerPaar();
    }
};

// ── Controleer of de 2 omgedraaide kaarten een paar vormen ───────────────
const controleerPaar = () => {
    global.isBusy = true; // blokkeer verdere klikken tijdens de wachttijd

    let kaart1 = global.omgedraaid[0];
    let kaart2 = global.omgedraaid[1];

    let index1 = kaart1.getAttribute("data-kaartindex");
    let index2 = kaart2.getAttribute("data-kaartindex");

    if (index1 === index2) {
        // ✅ Juist paar gevonden
        kaart1.classList.add("goed");
        kaart2.classList.add("goed");

        setTimeout(() => {
            // Verwijder de kaarten (visibility: hidden zodat de andere kaarten niet verschuiven)
            kaart1.classList.remove("goed", "omgedraaid");
            kaart2.classList.remove("goed", "omgedraaid");
            kaart1.classList.add("verwijderd");
            kaart2.classList.add("verwijderd");

            global.aantalParen++;
            global.omgedraaid = [];
            global.isBusy = false;

            // Score bijwerken
            document.getElementById("aantalOmgedraaid").textContent =
                "Paren gevonden: " + global.aantalParen + " / " + global.AANTAL_KAARTEN;

            // Controleer of het spel klaar is
            if (global.aantalParen === global.AANTAL_KAARTEN) {
                document.getElementById("eindscherm").classList.remove("hidden");
            }
        }, global.WACHT_TIJD);

    } else {
        // ❌ Fout paar
        kaart1.classList.add("fout");
        kaart2.classList.add("fout");

        setTimeout(() => {
            // Draai de kaarten terug naar de achterkant
            kaart1.src = global.ACHTERKANT;
            kaart2.src = global.ACHTERKANT;
            kaart1.classList.remove("omgedraaid", "fout");
            kaart2.classList.remove("omgedraaid", "fout");

            global.omgedraaid = [];
            global.isBusy = false;
        }, global.WACHT_TIJD);
    }
};

window.addEventListener("load", setup);
