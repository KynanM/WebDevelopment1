// Globaal object met alle constanten en spelstatus
let global = {
    IMAGE_COUNT: 5,              // aantal figuren (0.png t.e.m. 4.png)
    IMAGE_SIZE: 48,              // grootte van de figuur in pixels
    IMAGE_PATH_PREFIX: "images/",// map van de figuren
    IMAGE_PATH_SUFFIX: ".png",   // extensie van de figuren
    MOVE_DELAY: 1000,            // aantal ms voor een nieuwe afbeelding verschijnt
    BOMB_INDEX: 4,               // index van de bom afbeelding (4.png)
    score: 0,                    // aantal hits
    timeoutId: 0,                // id van de timeout timer, zodat we kunnen annuleren
    isPlaying: false             // is het spel bezig?
};

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", startGame);
    document.getElementById("btnRestart").addEventListener("click", restartGame);
    document.getElementById("target").addEventListener("click", onTargetClick);
};

// Willekeurige positie berekenen binnen het playField
const randomPosition = () => {
    let playField = document.getElementById("playField");
    let maxLeft = playField.clientWidth - global.IMAGE_SIZE;
    let maxTop = playField.clientHeight - global.IMAGE_SIZE;
    return {
        left: Math.floor(Math.random() * maxLeft),
        top: Math.floor(Math.random() * maxTop)
    };
};

// Willekeurig een nieuwe afbeelding kiezen en verplaatsen
const moveTarget = () => {
    let target = document.getElementById("target");
    let playField = document.getElementById("playField");

    // Kies een willekeurig figuur (0 t.e.m. IMAGE_COUNT - 1)
    let imgIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + imgIndex + global.IMAGE_PATH_SUFFIX;

    // Zet op willekeurige positie
    let pos = randomPosition();
    target.style.left = pos.left + "px";
    target.style.top = pos.top + "px";

    // Toon het target
    target.style.display = "block";

    // Stel de volgende verplaatsing in via setTimeout (geen setInterval,
    // zodat we de timer makkelijk kunnen annuleren bij game over)
    global.timeoutId = setTimeout(moveTarget, global.MOVE_DELAY);
};

// Klik op het target afhandelen
const onTargetClick = (event) => {
    if (!global.isPlaying) return;

    let target = event.currentTarget;

    // Controleer of de aangeklikte afbeelding de bom is
    let currentSrc = target.src;
    let isBomb = currentSrc.includes(global.IMAGE_PATH_PREFIX + global.BOMB_INDEX + global.IMAGE_PATH_SUFFIX);

    if (isBomb) {
        // Game over!
        endGame();
    } else {
        // Punt scoren
        global.score++;
        document.getElementById("scoreDisplay").textContent = global.score;

        // Annuleer de huidige timer en verplaats meteen naar volgende positie
        clearTimeout(global.timeoutId);
        moveTarget();
    }

    // Voorkom dat het event verder borrelt naar het playField
    event.stopPropagation();
};

// Spel starten
const startGame = () => {
    global.score = 0;
    global.isPlaying = true;
    document.getElementById("scoreDisplay").textContent = 0;
    document.getElementById("gameOver").classList.add("hidden");
    document.getElementById("btnStart").style.display = "none";

    moveTarget();
};

// Spel beëindigen bij het klikken op de bom
const endGame = () => {
    global.isPlaying = false;

    // Stop de timer
    clearTimeout(global.timeoutId);

    // Verberg het target
    document.getElementById("target").style.display = "none";

    // Toon de game over melding
    document.getElementById("finalScore").textContent = global.score;
    document.getElementById("gameOver").classList.remove("hidden");
};

// Spel opnieuw starten
const restartGame = () => {
    document.getElementById("btnStart").style.display = "inline-block";
    document.getElementById("gameOver").classList.add("hidden");
    startGame();
};

window.addEventListener("load", setup);
