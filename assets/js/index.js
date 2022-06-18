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


// Theme ---------------------------------------------------
const buttonLightMode = document.getElementById("light-mode");
const buttonDarkMode = document.getElementById("dark-mode");
const page = document.querySelector("html")

const lightMode = {
    background: "#FFFFFF",
    numbers: "#323238",
    controls:"#323238",
    cardsActivated: "#02799D",
    cardsDisabled: "#E1E1E6",
    soundsActivated: "#FFFFFF",
    soundsDisabled: "#323238",
    volumeActivated: "#FFFFFF",
    volumeDisabled: "#323238",
}

const darkMode = {
    background: "#121214",
    numbers: "#FFFFFF",
    controls:"#C4C4CC",
    cardsActivated: "#0A3442",
    cardsDisabled: "#29292E",
    soundsActivated: "#FFFFFF",
    soundsDisabled: "#C4C4CC",
    volumeActivated: "#FFFFFF",
    volumeDisabled: "#FFFFFF",
}

function changeIcon() {
    buttonLightMode.classList.toggle("hide");
    buttonDarkMode.classList.toggle("hide");
}

function changeKeyText(key) {
    let changedKey = `--color-${key}`;
    changedKey = changedKey.replace(/([A-Z])/, "-$1").toLowerCase();
    return changedKey;
}

function changeColor(cssVariable, key) {
  page.style.setProperty(`${cssVariable}`, `${key}`);
}

function changeTheme(themeColors) {
  for(let counter in themeColors) {
    let cssVariable = changeKeyText(counter);
    changeColor(cssVariable, themeColors[counter]);
  }
}

buttonLightMode.addEventListener("click", function() {
    changeIcon();
    changeTheme(darkMode);
})

buttonDarkMode.addEventListener("click", function() {
    changeIcon();
    changeTheme(lightMode);
})