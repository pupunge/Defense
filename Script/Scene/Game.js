var UIGame = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64]
}; 

function loopGame() {
    displayGame();
}

function displayGame() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.drawImage(img.button.back, UIGame.backButton[0], UIGame.backButton[1]);

    if (state === 'Start') {
        context.fillText(`Build a deck.`, UIGame.titleText[0], UIGame.titleText[1]);
    }
}

function mouseUpGame(x, y) {
    if (menu === false) {
        if (state === 'Start') {
            if (pointInsideRectArray(x, y, UIGame.backButton)) {
                scene = 'LevelSelect';
                state = '';
            }
        }
    }
}

function keyDownGame(key) {

}