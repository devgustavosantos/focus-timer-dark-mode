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
        sound.turnOnAmbient(sound.forest);
        display.activatedCard(currentTarget);
    });
     
    cardRain.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(sound.rain);
        display.activatedCard(currentTarget);
    });
     
    cardCoffeeShop.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(sound.coffeeShop);
        display.activatedCard(currentTarget);
    });
     
    cardFirePit.addEventListener("click", function({currentTarget}) {
        sound.turnOnAmbient(sound.firePit);
        display.activatedCard(currentTarget);
    });

    buttonLightMode.addEventListener("click", function() {
        theme.changeTheme(theme.darkColors);
    });

    buttonDarkMode.addEventListener("click", function() {
        theme.changeTheme(theme.lightColors);
    });
}