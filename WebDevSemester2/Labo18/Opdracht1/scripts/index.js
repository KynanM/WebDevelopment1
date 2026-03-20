const setup = () => {
    // Paragraaf met id="abc" ophalen zodat we in de debugger de DOM-tree kunnen verkennen
    let paragraaf = document.getElementById("abc");

    // Breakpoint hier plaatsen in de Chrome Developer Tools
    // Verken via paragraaf.childNodes de TEXT nodes en SPAN node
    // Verken via paragraaf.parentNode omhoog in de boom
    console.log("Paragraaf node:", paragraaf);
    console.log("childNodes:", paragraaf.childNodes);

    for (let i = 0; i < paragraaf.childNodes.length; i++) {
        let node = paragraaf.childNodes[i];
        console.log(
            "node", i,
            "| nodeType:", node.nodeType,
            "| nodeName:", node.nodeName,
            "| nodeValue:", node.nodeValue
        );
    }
};

window.addEventListener("load", setup);
