
const STORAGE_KEY_SLIDERS  = "colorpicker_sliders";
const STORAGE_KEY_SWATCHES = "colorpicker_swatches";

const saveSliders = () => {
    const data = {
        red:   document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue:  document.getElementById("sldBlue").value
    };
    localStorage.setItem(STORAGE_KEY_SLIDERS, JSON.stringify(data));
};

const saveSwatches = () => {
    const swatchDivs = document.querySelectorAll("#swatchComponents .swatch");
    const data = Array.from(swatchDivs).map(s => ({
        red:   s.getAttribute("data-red"),
        green: s.getAttribute("data-green"),
        blue:  s.getAttribute("data-blue")
    }));
    localStorage.setItem(STORAGE_KEY_SWATCHES, JSON.stringify(data));
};


const restoreSliders = () => {
    const raw = localStorage.getItem(STORAGE_KEY_SLIDERS);
    if (!raw) return;
    const { red, green, blue } = JSON.parse(raw);
    document.getElementById("sldRed").value   = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value  = blue;
};

const restoreSwatches = () => {
    const raw = localStorage.getItem(STORAGE_KEY_SWATCHES);
    if (!raw) return;
    const swatchComponents = document.getElementById("swatchComponents");
    JSON.parse(raw).forEach(({ red, green, blue }) => {
        const swatch = buildSwatchComponent(red, green, blue);
        swatchComponents.appendChild(swatch);
    });
};

const initialize = () => {
    const btnSave = document.getElementById("btnSave");
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input",  update);
    }

    restoreSliders();
    restoreSwatches();
    update();

    btnSave.addEventListener("click", saveSwatch);
};

const saveSwatch = () => {
    const swatchComponents = document.getElementById("swatchComponents");
    const swatch = buildSwatchComponent(
        document.getElementById("sldRed").value,
        document.getElementById("sldGreen").value,
        document.getElementById("sldBlue").value
    );
    swatchComponents.appendChild(swatch);
    saveSwatches();
};

const buildSwatchComponent = (red, green, blue) => {
    const swatch    = document.createElement("div");
    const btnDelete = document.createElement("input");

    swatch.className = "swatch";
    swatch.setAttribute("data-red",   red);
    swatch.setAttribute("data-green", green);
    swatch.setAttribute("data-blue",  blue);
    swatch.style.background = `rgb(${red},${green},${blue})`;
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type",  "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const setColorPickerFromSwatch = (event) => {
    const swatch = event.target;

    document.getElementById("sldRed").value   = swatch.getAttribute("data-red");
    document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
    document.getElementById("sldBlue").value  = swatch.getAttribute("data-blue");
    update();
};

const deleteSwatch = (event) => {
    const swatchComponents = document.getElementById("swatchComponents");
    const button = event.target;
    const swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
    saveSwatches();
    event.stopPropagation();
};

const update = () => {
    const red   = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue  = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML   = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML  = blue;

    document.getElementById("swatch").style.background =
        `rgb(${red},${green},${blue})`;

    saveSliders();
};

window.addEventListener("load", initialize);
