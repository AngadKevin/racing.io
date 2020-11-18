
var database;
var form;
var playerCount;
var gameState;
var player;
var game;
function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
   game = new Game();
   game.getState();
   game.start(); 
}

function draw(){
    background("white");
    if(playerCount===4){
        game.updateState(1);
    }
}

