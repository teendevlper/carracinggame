class Game{
    constructor(){

    }
getgameState(){
    var gmstateref = database.ref('gameState');
    gmstateref.on("value", function(data){
         gamestate = data.val();
    } );
  }
updateGameState(state){
    var GameStateREF = database.ref('/');
    GameStateREF.update({
       gameState : state
    });
}
startGame(){
    if(gamestate === 0){
        player = new Player();
        player.getPlayerCount();
        form = new Form();
        form.display();
    }
}

}