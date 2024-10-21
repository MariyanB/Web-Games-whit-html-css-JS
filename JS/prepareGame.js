function prepareGame () {
    let playScreen = document.getElementsByClassName("play-game")[0];
    return {
        createWizard(initState) {
            let wizardElement = document.createElement("div");
            wizardElement.style.backgroundImage = "url(./recourses/wizard.png)";
            wizardElement.style.position = "absolute";
            wizardElement.style.width = initState.wizard.width + "px";
            wizardElement.style.height = initState.wizard.height + "px";
            wizardElement.style.top = initState.wizard.posY + "px";
            wizardElement.style.left = initState.wizard.posX + "px";
            playScreen.appendChild(wizardElement);
            this.wizardElement = wizardElement;
            return wizardElement
        }, 
        createFireball(wizard, fireball) {
            let fireballElement = document.createElement("div");
            fireballElement.classList.add("fireball");
            fireballElement.style.position = "absolute";
            fireballElement.style.left = wizard.posX + wizard.width + "px";
            fireballElement.style.top = wizard.posY  + 20 + "px";
            fireballElement.style.height = fireball.height + "px";
            fireballElement.style.width = fireball.width + "px";
            this.fireballElement = fireballElement;
            playScreen.appendChild(fireballElement)
            return fireballElement;
        },

        createBug(bugInfo) {
            let bugElement = document.createElement("div");
            bugElement.classList.add("bugs");
            bugElement.style.position = "absolute";
            bugElement.style.width = bugInfo.width + "px";
            bugElement.style.height = bugInfo.height + "px";
            bugElement.style.left = document.body.clientWidth - bugInfo.width + "px";
            bugElement.style.top = Math.floor(Math.random() * document.body.clientHeight - bugInfo.height) + "px";
            playScreen.appendChild(bugElement);
            this.bugElement = bugElement
            return bugElement
        }
    }
} 
