var UILevelSelect = {
    titleText : [8, 48],
};

function loopLevelSelect() {
    displayLevelSelect();
}

function displayLevelSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select level`, UILevelSelect.titleText[0], UILevelSelect.titleText[1]);

    for (var i = 1; i < 6; i++) {
        if (save.levelCleared[i] === 0) {
            context.drawImage(img.button.levelLocked, dataLevelPosition[i]['Position'][0], dataLevelPosition[i]['Position'][1]);
        } else if (save.levelCleared[i] === 1) {
            context.drawImage(img.button.levelUnlocked, dataLevelPosition[i]['Position'][0], dataLevelPosition[i]['Position'][1]);
        } else if (save.levelCleared[i] === 2) {
            context.drawImage(img.button.levelCleared, dataLevelPosition[i]['Position'][0], dataLevelPosition[i]['Position'][1]);
        }
    }
}

function mouseUpLevelSelect(x, y) {

}

function keyDownLevelSelect(key) {
    
}