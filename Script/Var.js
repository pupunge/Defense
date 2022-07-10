var canvas;
var context;
var canvasRect;

var scene = 'Title';
var state = '';
var menu = false;
var pause = false;

var save = {};

var camera = [0, 0];

var player = {
    hand : [],
    deckPrimial : [],
    deck : [],
    item : [],

    life : 0,
    lifeMax : 0,
    energy : 0,
    energyMax : 0,
    energyGen : 0,
    generatorLevel : 0,
};

var field = {
    cell : [],
    thing : [],
    player : [],
    projectile : [],
    enemy : [],
};