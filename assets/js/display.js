export function Display ({
    minutesDisplay,
    secondsDisplay,
    sound
}) {
    function updateTime(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function userIncreasedTime() {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
        let maximumTimeReached = minutes >= 95;
        
        if(maximumTimeReached) {
            updateTime(99, 59);
            alert("O tempo máximo do temporizador é de 99:59!");

        } else {
            updateTime((minutes + 5), seconds);
        }
    }

    function userDecreasedTime() {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
        let minimumTimeReached = (minutes > 5) || (minutes == 5 && seconds > 0);
        
        if(minimumTimeReached) {
            updateTime((minutes - 5), seconds);
        } else {
            alert("Não é possivel diminuir o tempo em 5 minutos!");
        }
    }

    function activatedCard(eventTarget, card){
        let volumeWasTheTarget = eventTarget.classList.contains("volume-controls");

        if(!volumeWasTheTarget) {
            toggleCardAppearance(card);
            resetVolumeAppearance(card);
        } 
    }
    
    function toggleCardAppearance(card) {
        let icon = card.children[0].children[0];
        let volume = card.children[1];
        
        card.classList.toggle("sound-on-div");
        icon.classList.toggle("sound-on-svg");
        volume.classList.toggle("volume-activated");

    }

    function resetVolumeAppearance(card) {
        let volume = card.children[1]
        volume.value = 50
    }

    return {
        updateTime,
        userIncreasedTime,
        userDecreasedTime,
        activatedCard
    }
}