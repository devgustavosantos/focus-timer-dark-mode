export function Sounds() {
    const forest = new Audio("./assets/sound/forest.wav");
    const rain = new Audio("./assets/sound/rain.wav");
    const coffeeShop = new Audio("./assets/sound/coffee-shop.wav");
    const firePit = new Audio("./assets/sound/fire-pit.wav");
    const alert = new Audio("./assets/sound/alert.mp3");
  
    function chosenSound(card) {
      switch(card) {
        case "forest-card":
          return forest;
        case "rain-card":
          return rain;
        case "coffee-shop-card":
          return coffeeShop;
        case "fire-pit-card":
          return firePit;
      }
    }
    
    function turnOnAmbient(sound) {
        sound = chosenSound(sound.id);
        sound.loop = true;
        if(sound.paused){
            sound.play();
        } else {
            sound.pause();
        }
    }
    
    function turnOnAlert() {
        alert.play();
    }
  
    return {
        turnOnAmbient,
        turnOnAlert
    }
  }