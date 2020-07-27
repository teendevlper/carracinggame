class Form{
    constructor(){

    }
display(){
    var title = createElement('h1');
    title.html("Car Racing Game");
    title.position(200,130);

    var inputBox = createInput("username");
    inputBox.position(200,200);

    var playerButton = createButton("Submit");
    playerButton.position(200,250);

    var greet = createElement("h3");
    

   playerButton.mousePressed(function(){
       inputBox.hide();
       playerButton.hide();
       var name = inputBox.value();
       playercount = playercount + 1;
       player.updatePlayerName(name);   
       player.updatePlayerCount(playercount); 
       greet.html("Welcome " + name);
       greet.position(200,200);  
    })
   
}
}