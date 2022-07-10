var img = {
    button : {
        levelLocked : new Image(),
        levelUnlocked : new Image(),
        levelCleared : new Image(),
    },
};

function imageLoad() {
    img.button.levelLocked.src = 'Image/Button/LevelLocked.png';
    img.button.levelUnlocked.src = 'Image/Button/LevelUnlocked.png';
    img.button.levelCleared.src = 'Image/Button/LevelCleared.png';
}

function generateOffscreenCanvas() {
    
}