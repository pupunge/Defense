var UILevelSelect = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
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
    context.drawImage(img.button.back, UISaveSelect.backButton[0], UISaveSelect.backButton[1]);

    context.font = '16px Opensans Bold';
    context.lineWidth = 8;

    for (var i = 1; i < 9; i++) {
        if (save.levelCleared[i] === 0) {
            context.drawImage(img.button.levelLocked, dataLevelPosition[i]['Position'][0] - camera[0], dataLevelPosition[i]['Position'][1] - camera[1]);
        } else if (save.levelCleared[i] === 1) {
            context.drawImage(img.button.levelUnlocked, dataLevelPosition[i]['Position'][0] - camera[0], dataLevelPosition[i]['Position'][1] - camera[1]);
        } else if (save.levelCleared[i] === 2) {
            context.drawImage(img.button.levelCleared, dataLevelPosition[i]['Position'][0] - camera[0], dataLevelPosition[i]['Position'][1] - camera[1]);
        }

        context.fillText(dataLevelPosition[i]['Name'], dataLevelPosition[i]['Position'][0] - camera[0] + 4, dataLevelPosition[i]['Position'][1] - camera[1] + 46);
    }
}

function mouseUpLevelSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UILevelSelect.backButton)) {
                scene = 'SaveSelect';
            }
        }
    }
}

function keyDownLevelSelect(key) {
    
}