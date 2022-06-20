import {    
    buttonPlay,
    buttonStop,
    buttonIncresse,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFirePit,
    volumeForest,
    volumeRain,
    volumeCoffeeShop,
    volumeFirePit,
    buttonLightMode,
    buttonDarkMode,
} from "./elements.js";

export function Events({
    timer,
    display,
    sound,
    theme
}) {
    buttonPlay.addEventListener("click", function() {
        timer.startCounting();
     });
       
    buttonStop.addEventListener("click", function() {
        timer.stopCounting();
    });
     
    buttonIncresse.addEventListener("click", function() {
        display.userIncreasedTime();
    });
     
    buttonDecrease.addEventListener("click", function() {
        display.userDecreasedTime();
    });
     
    cardForest.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });
     
    cardRain.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });
     
    cardCoffeeShop.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });
     
    cardFirePit.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });

    volumeForest.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });
     
    volumeRain.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });
     
    volumeCoffeeShop.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });
     
    volumeFirePit.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });

    buttonLightMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });

    buttonDarkMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });
}