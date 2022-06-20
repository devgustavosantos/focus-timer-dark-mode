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
    
    function turnOnAmbient(eventTarget, card) {
      let volumeWasTheTarget = eventTarget.classList.contains("volume-controls");
      
      if(!volumeWasTheTarget) {
        let sound = chosenSound(card.id);
        sound.loop = true;
        if(sound.paused){
            sound.play();
            sound.volume = 0.5;
        } else {
            sound.pause();
        }
      }
    }
    
    function turnOnAlert() {
        alert.play();
    }

    function chooseVolume(volumeCard) {
      let theSoundOfThisCard = chosenSound(volumeCard.parentNode.id);
      let isTheSoundPlaying = !theSoundOfThisCard.paused;

      if(isTheSoundPlaying) {
        theSoundOfThisCard.volume = `${(volumeCard.value)/100}`;
      }
    }
  
    return {
        turnOnAmbient,
        turnOnAlert,
        chooseVolume,
    }
  }