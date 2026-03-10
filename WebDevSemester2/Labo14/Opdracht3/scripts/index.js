const setup = () => {
    window.alert("Dit is een alert.");

    let confirmResultaat = window.confirm("Klik OK of Annuleren.");
    console.log(confirmResultaat);

    let promptResultaat = window.prompt("Wat is je favoriete programmeertaal?");
    console.log(promptResultaat);
}
window.addEventListener("load", setup);