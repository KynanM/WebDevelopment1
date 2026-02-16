const setup = () => {

    const wijzig = () => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    }

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);

}

window.addEventListener("load", setup);