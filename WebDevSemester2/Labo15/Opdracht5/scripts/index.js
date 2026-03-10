const setup = () => {
    let knop = document.getElementById("btnHerbereken");
    knop.addEventListener("click", herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");

    let totaalSom = 0;

    for (let i = 0; i < prijzen.length; i++) {

        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseFloat(btws[i].textContent);

        let subtotaal = (prijs * aantal) * (1 + (btw / 100));

        subtotalen[i].textContent = subtotaal.toFixed(2) + " Eur";

        totaalSom += subtotaal;
    }

    document.getElementById("totaal").textContent = totaalSom.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);