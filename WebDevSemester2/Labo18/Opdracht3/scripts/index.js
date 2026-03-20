const setup = () => {
    // Spans invullen met voorbeelddata
    document.getElementById("nickname").textContent = "KynanDev";
    document.getElementById("favorites").textContent = "JavaScript, gaming, muziek";
    document.getElementById("hometown").textContent = "Kortrijk";

    // Itereer door elk li-element en stel class in op "listitem" (rood via CSS)
    let liItems = document.getElementsByTagName("li");
    for (let i = 0; i < liItems.length; i++) {
        liItems[i].className = "listitem";
    }

    // Nieuw img-element aanmaken en toevoegen aan het einde van de body
    let img = document.createElement("img");
    img.setAttribute("src", "images/foto.jpg");
    img.setAttribute("alt", "Foto van mezelf");
    img.setAttribute("width", "200");
    document.body.appendChild(img);
};

window.addEventListener("load", setup);
