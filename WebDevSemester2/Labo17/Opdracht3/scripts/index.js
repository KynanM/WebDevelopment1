const setup = () => {
    let gemeenten = [];
    let stoppen = false;

    while (!stoppen) {
        let invoer = window.prompt("Geef een gemeente in");
        if (invoer === null || invoer.trim().toLowerCase() === "stop") {
            stoppen = true;
        } else if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    gemeenten.sort((a, b) => a.localeCompare(b));

    let selectElement = document.getElementById("gemeentenLijst");
    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement("option");
        option.text = gemeenten[i];
        option.value = gemeenten[i];
        selectElement.appendChild(option);
    }
}
window.addEventListener("load", setup);