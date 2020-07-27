class Player{
    constructor(){

    }
getPlayerCount(){
  var plrcntref = database.ref("playerCount");
  plrcntref.on("value", function(data){
    playercount = data.val();
  })
 }
 updatePlayerCount(count){
  var playercountref = database.ref("/");
  playercountref.update({
      playerCount : count
  });
 }
 updatePlayerName(name){
 var playerNumber = "player" + playercount;
  var playerREF = database.ref(playerNumber);
   playerREF.set({
       playername : name
   });
 }
}