const setup = () => {
    let opvallend = document.getElementsByClassName('belangrijk');
    let i;

    for(i=0; opvallend.length > i; i++){
        opvallend[i].className+=" opvallend";
    }

}
window.addEventListener("load", setup);