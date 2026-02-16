const setup = () => {
    const setup = () => {
        let btn = document.getElementById("btnSlice");
        btn.addEventListener("click", updateOutput);
    }

    const updateOutput = () => {
        let tekst = document.getElementById("txtTekst").value;
        let start = Number(document.getElementById("numStart").value);
        let einde = Number(document.getElementById("numEinde").value);

        let output = document.getElementById("txtOutput");
        output.textContent = tekst.slice(start, einde);
    }

    window.addEventListener("load", setup);
}
window.addEventListener("load", setup);