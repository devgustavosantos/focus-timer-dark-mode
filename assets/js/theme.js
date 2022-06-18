import { 
    buttonLightMode,
    buttonDarkMode
} from "./elements.js";

export function Theme() {
    const page = document.querySelector("html");
    
    const lightColors = {
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
    
    const darkColors = {
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

    function chosenTheme(theme){
      let whichThemeWillBeDisabled = theme == "light-mode"
      if(whichThemeWillBeDisabled) {
        return darkColors;
      } else {
        return lightColors;
      }
    }
    
    function changeTheme(themeColors) {
      themeColors = chosenTheme(themeColors.id)
      for(let counter in themeColors) {
        let cssVariable = changeKeyText(counter);
        changeColor(cssVariable, themeColors[counter]);
      }
      changeIcon();
    }

    return {
        changeTheme
    }
}