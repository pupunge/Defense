function saveInit() {
    if (localStorage.getItem('DesserterriaDefense') === null || localStorage.getItem('DesserterriaDefense') === '[object Object]') {
        localStorage.setItem('DesserterriaDefense', JSON.stringify(emptyFile));
    }

    save = JSON.parse(localStorage.getItem('DesserterriaDefense'));
}

function saveFile() {
    localStorage.setItem('DesserterriaDefense', JSON.stringify(save));
}

function loadFile() {
    save = JSON.parse(localStorage.getItem('DesserterriaDefense'));
}

function eraseFile() {
    localStorage.setItem('DesserterriaDefense', JSON.stringify(emptyFile));
    save = JSON.parse(localStorage.getItem('DesserterriaDefense'));
}

function startNewGame() {
    save.new = false;
    save.gold = 50;
    save.levelCleared = [0, 1, 0, 0, 0, 0, 0, 0];
    save.collectionCard = [0, 1, 0, 0, 0, 0, 0, 0];
    save.collectionItem = [];
    progress = {};
}

function saveFileLoad() {
    
}