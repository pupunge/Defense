var UISaveSelect = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
};

function loopSaveSelect() {
    displaySaveSelect();
}

function displaySaveSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select save file`, UISaveSelect.titleText[0], UISaveSelect.titleText[1]);
}

function mouseUpSaveSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UISaveSelect.backButton)) {
                scene = 'Title';
            }
        }
    }
}

function keyDownSaveSelect(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 27) {
                scene = 'Title';
            }
        }
    }
}