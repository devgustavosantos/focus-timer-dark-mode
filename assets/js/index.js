import { Timer } from "./timer.js";
import { Display } from "./display.js";
import { Sounds } from "./sound.js";
import { Events } from "./events.js";
import { Theme } from "./theme.js";
import {
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";


const sound = Sounds();

const display = Display({
    minutesDisplay,
    secondsDisplay,
    sound
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    soundAlert: sound.turnOnAlert,
    updateTime: display.updateTime,
});

const theme = Theme();


Events({  
    timer,
    display,
    sound,
    theme,
});
