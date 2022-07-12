var img = {
    button : {
        levelLocked : new Image(),
        levelUnlocked : new Image(),
        levelCleared : new Image(),
        back : new Image(),
    },
};

function imageLoad() {
    img.button.levelLocked.src = 'Image/Button/LevelLocked.png';
    img.button.levelUnlocked.src = 'Image/Button/LevelUnlocked.png';
    img.button.levelCleared.src = 'Image/Button/LevelCleared.png';
    img.button.back.src = 'Image/Button/BackButton.png';
}

function generateOffscreenCanvas() {
    
}