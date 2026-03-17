const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";
    let i = 0;

    while (i < zin.length) {
        if (zin.slice(i, i + 2) === "de") {
            let isBeginOfSpatieVoor = (i === 0 || zin.slice(i - 1, i) === " ");
            let isEindeOfSpatieNa = (i + 2 === zin.length || zin.slice(i + 2, i + 3) === " ");

            if (isBeginOfSpatieVoor && isEindeOfSpatieNa) {
                resultaat += "het";
                i += 2;
                continue;
            }
        }

        resultaat += zin.slice(i, i + 1);
        i++;
    }
    console.log(resultaat);
}
window.addEventListener("load", setup);