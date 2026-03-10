const setup = () => {
    const btn = document.getElementById("btnVerwerk");
    const input = document.getElementById("txtInput");

    btn.addEventListener("click", () => {
        let tekst = input.value;

        let zonderSpaties = tekst.replace(/\s+/g, '');

        let resultaat = zonderSpaties.split('').join(' ');

        console.log(resultaat);
    });
}

window.addEventListener("load", setup);