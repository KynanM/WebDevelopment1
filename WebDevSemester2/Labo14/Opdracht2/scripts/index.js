const setup = () => {

    const names = ["Bob", "Henk", "Femke", "Tom", "Henry"]

    console.log(names.length)
    console.log(names[0], names[2], names[4]);


    function VoegNaamToe(deLijst) {
        let nieuweNaam = prompt("Welke naam wil je toevoegen?");

        if (nieuweNaam) {
            names.push(nieuweNaam);
        }
    }

    VoegNaamToe(names);
    console.log("De bijgewerkte lijst is:", names);

    console.log(names.join(" , " ))
}
window.addEventListener("load", setup);