import { Timer } from "./timer.js";
import { Display } from "./display.js";
import { Sounds } from "./sound.js";
import { Events } from "./events.js";
import {
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";


const sound = Sounds();

const display = Display({
    minutesDisplay,
    secondsDisplay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    soundAlert: sound.turnOnAlert,
    updateTime: display.updateTime,
});

Events({  
    timer,
    display,
    sound
});


// Colors ---------------------------------------------------
const buttonLightMode = document.getElementById("light-mode");
const buttonDarkMode = document.getElementById("dark-mode");

const lightMode = {
    background: "#FFFFFF",
    numbers: "#323238",
    controls:"#323238",
    cards: {
        activated: "#02799D",
        disabled: "#E1E1E6",
    },
    sounds: {
        activated: "#FFFFFF",
        disabled: "#323238",
    },
    volume: {
        activated: "#FFFFFF",
        disabled: "#323238",
    },
}

const darkMode = {
    background: "#121214",
    numbers: "#FFFFFF",
    controls:"#C4C4CC",
    cards: {
        activated: "#0A3442",
        disabled: "#29292E",
    },
    sounds: {
        activated: "#FFFFFF",
        disabled: "#C4C4CC",
    },
    volume: {
        activated: "#FFFFFF",
        disabled: "#FFFFFF",
    },
}


buttonLightMode.addEventListener("click", function() {
    buttonLightMode.classList.toggle("hide");
    buttonDarkMode.classList.toggle("hide");

    const page = document.querySelector("html")
    page.style.setProperty(`--color-background`, `${darkMode.background}`);
    page.style.setProperty(`--color-numbers`, `${darkMode.numbers}`);
    page.style.setProperty(`--color-controls`, `${darkMode.controls}`);
    page.style.setProperty(`--color-cards-disabled`, `${darkMode.cards.disabled}`);
    page.style.setProperty(`--color-cards-activated`, `${darkMode.cards.activated}`);
    page.style.setProperty(`--color-sounds-disabled`, `${darkMode.sounds.disabled}`);
    page.style.setProperty(`--color-sounds-activated`, `${darkMode.sounds.activated}`);
    page.style.setProperty(`--color-volume-disabled`, `${darkMode.volume.disabled}`);
    page.style.setProperty(`--color-volume-activated`, `${darkMode.volume.activated}`);
})

buttonDarkMode.addEventListener("click", function() {
    buttonDarkMode.classList.toggle("hide");
    buttonLightMode.classList.toggle("hide");

    const page = document.querySelector("html")
    page.style.setProperty(`--color-background`, `${lightMode.background}`);
    page.style.setProperty(`--color-numbers`, `${lightMode.numbers}`);
    page.style.setProperty(`--color-controls`, `${lightMode.controls}`);
    page.style.setProperty(`--color-cards-disabled`, `${lightMode.cards.disabled}`);
    page.style.setProperty(`--color-cards-activated`, `${lightMode.cards.activated}`);
    page.style.setProperty(`--color-sounds-disabled`, `${lightMode.sounds.disabled}`);
    page.style.setProperty(`--color-sounds-activated`, `${lightMode.sounds.activated}`);
    page.style.setProperty(`--color-volume-disabled`, `${lightMode.volume.disabled}`);
    page.style.setProperty(`--color-volume-activated`, `${lightMode.volume.activated}`);
})