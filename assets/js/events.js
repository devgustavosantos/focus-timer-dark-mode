import {    
    buttonPlay,
    buttonStop,
    buttonIncresse,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFirePit,
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
     
    cardForest.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(currentTarget);
        display.activatedCard(currentTarget);
    });
     
    cardRain.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(currentTarget);
        display.activatedCard(currentTarget);
    });
     
    cardCoffeeShop.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(currentTarget);
        display.activatedCard(currentTarget);
    });
     
    cardFirePit.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(currentTarget);
        display.activatedCard(currentTarget);
    });

    buttonLightMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });

    buttonDarkMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });
}