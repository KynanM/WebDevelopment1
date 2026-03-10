const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    update();
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");

    let redValue = sliders[0].value;
    let greenValue = sliders[1].value;
    let blueValue = sliders[2].value;

    document.getElementById("lbl-red").textContent = "Red " + redValue;
    document.getElementById("lbl-green").textContent = "Green " + greenValue;
    document.getElementById("lbl-blue").textContent = "Blue " + blueValue;

    let rgbString = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";

    let colorDemos = document.getElementsByClassName("colorDemo");
    colorDemos[0].style.backgroundColor = rgbString;
}

window.addEventListener("load", setup);