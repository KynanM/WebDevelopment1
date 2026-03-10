const setup = () => {
    const maakMetSpaties = (inputText) => {
        let result = "";


        let opgekuisteTekst = "";
        for (let i = 0; i < inputText.length; i++) {
            if (inputText.charAt(i) !== " ") {
                opgekuisteTekst += inputText.charAt(i);
            }
        }

        for (let i = 0; i < opgekuisteTekst.length; i++) {
            result += opgekuisteTekst.charAt(i);

            if (i < opgekuisteTekst.length - 1) {
                result += " ";
            }
        }

        return result;
    };

    const btn = document.getElementById("btnVerwerk");
    const input = document.getElementById("txtInput");

    btn.addEventListener("click", () => {
        const tekst = input.value;
        const uitkomst = maakMetSpaties(tekst);

        console.log(uitkomst);
    });
};

window.addEventListener("load", setup);