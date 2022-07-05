var UITitle = {
    titleText : [6, 48],
    startGameButton : [128, 128, 768, 64],
    startGameText : [136, 176],
    collectionButton : [128, 192, 768, 64],
    collectionText : [136, 240],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Defense`, UITitle.titleText[0], UITitle.titleText[1]);

    context.fillText(`Start Game`, UITitle.startGameText[0], UITitle.startGameText[1]);
    context.fillText(`Collection`, UITitle.collectionText[0], UITitle.collectionText[1]);
}

function mouseUpTitle(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UITitle.startGameButton)) {
                scene = 'SaveSelect';
            }
        }
    }
}