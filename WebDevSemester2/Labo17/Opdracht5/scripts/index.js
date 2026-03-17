const setup = () => {

    const isGetal = (tekst) => {
        return !isNaN(tekst) && tekst.trim() !== "";
    };

    const valideerVeld = (id, isValid, errorMessage) => {
        let inputEl = document.getElementById(id);
        let errorSpan = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));

        if (!isValid) {
            inputEl.classList.add("fout-input");
            errorSpan.textContent = errorMessage;
            return false;
        } else {
            inputEl.classList.remove("fout-input");
            errorSpan.textContent = "";
            return true;
        }
    };

    const valideerForm = () => {
        let allesCorrect = true;

        let voornaam = document.getElementById("voornaam").value.trim();
        if (voornaam.length > 30) {
            allesCorrect = valideerVeld("voornaam", false, "max. 30 karakters") && allesCorrect;
        } else {
            valideerVeld("voornaam", true, "");
        }

        let familienaam = document.getElementById("familienaam").value.trim();
        if (familienaam === "") {
            allesCorrect = valideerVeld("familienaam", false, "verplicht veld") && allesCorrect;
        } else if (familienaam.length > 50) {
            allesCorrect = valideerVeld("familienaam", false, "max 50 karakters") && allesCorrect;
        } else {
            valideerVeld("familienaam", true, "");
        }

        let datum = document.getElementById("geboortedatum").value.trim();
        if (datum === "") {
            allesCorrect = valideerVeld("geboortedatum", false, "verplicht veld") && allesCorrect;
        } else {
            let formaatOk = true;
            if (datum.length !== 10) formaatOk = false;
            else if (datum.slice(4, 5) !== "-" || datum.slice(7, 8) !== "-") formaatOk = false;
            else {
                let j = datum.slice(0, 4);
                let m = datum.slice(5, 7);
                let d = datum.slice(8, 10);
                if (!isGetal(j) || !isGetal(m) || !isGetal(d)) formaatOk = false;
            }

            if (!formaatOk) {
                allesCorrect = valideerVeld("geboortedatum", false, "formaat is niet jjjj-mm-dd") && allesCorrect;
            } else {
                valideerVeld("geboortedatum", true, "");
            }
        }

        let email = document.getElementById("email").value.trim();
        if (email === "") {
            allesCorrect = valideerVeld("email", false, "verplicht veld") && allesCorrect;
        } else {
            let idx = email.indexOf("@");
            if (idx === -1 || idx !== email.lastIndexOf("@") || idx < 1 || idx > email.length - 2) {
                allesCorrect = valideerVeld("email", false, "geen geldig email adres") && allesCorrect;
            } else {
                valideerVeld("email", true, "");
            }
        }

        let kinderen = document.getElementById("kinderen").value.trim();
        if (!isGetal(kinderen) || Number(kinderen) < 0) {
            allesCorrect = valideerVeld("kinderen", false, "is geen positief getal") && allesCorrect;
        } else if (Number(kinderen) >= 99) {
            allesCorrect = valideerVeld("kinderen", false, "is te vruchtbaar") && allesCorrect;
        } else {
            valideerVeld("kinderen", true, "");
        }

        if (allesCorrect) {
            window.alert("proficiat!");
        }
    };

    document.getElementById("btnValideer").addEventListener("click", valideerForm);
}
window.addEventListener("load", setup);