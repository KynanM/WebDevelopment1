const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekTerm = "an";

    let tellerIndex = 0;
    let positieIndex = tekst.indexOf(zoekTerm);

    while (positieIndex !== -1) {
        tellerIndex++;
        positieIndex = tekst.indexOf(zoekTerm, positieIndex + 1);
    }

    console.log("Met indexOf: de sequentie 'an' komt " + tellerIndex + " keer voor.");


    let tellerLast = 0;
    let positieLast = tekst.lastIndexOf(zoekTerm);

    while (positieLast !== -1) {
        tellerLast++;
        positieLast = tekst.lastIndexOf(zoekTerm, positieLast - 1);
    }

    console.log("Met lastIndexOf: de sequentie 'an' komt " + tellerLast + " keer voor.");
}

window.addEventListener("load", setup);