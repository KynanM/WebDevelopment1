const setup = () => {

    const toonResultaat = () => {
        let isRoker = document.getElementById("isRoker").checked;
        console.log(isRoker ? "is roker" : "is geen roker");

        let radios = document.getElementsByName("moedertaal");
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log("moedertaal is " + radios[i].value);
                break;
            }
        }

        let buurland = document.getElementById("favorieteBuurland").value;
        console.log("favoriete buurland is " + buurland);

        let bestellingSelect = document.getElementById("bestelling");
        let besteldeItems = [];
        for (let i = 0; i < bestellingSelect.options.length; i++) {
            if (bestellingSelect.options[i].selected) {
                besteldeItems.push(bestellingSelect.options[i].value);
            }
        }
        console.log("bestelling bestaat uit " + besteldeItems.join(" "));
    };

    document.getElementById("btnToonResultaat").addEventListener("click", toonResultaat);
}
window.addEventListener("load", setup);