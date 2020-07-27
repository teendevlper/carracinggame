var player,form,game;
var gamestate = 0,  playercount = 0;

var database;

function setup(){
    createCanvas(400,400);

    database = firebase.database();
    game = new Game();
    game.getgameState();
    game.startGame();
}

function draw(){


}
