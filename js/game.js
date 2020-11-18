class Game {
    constructor() {


    }
    getState() {
        database.ref('gamestate').on("value", (data) => {
            gameState = data.val();
        })

    }
    updateState(state) {
        database.ref('/').update({
            gamestate: state
        })

    }
    async start() {
        if(gameState==0){
            player=new Player();
          var playercountref=await database.ref('playercount').once("value");
          if(playercountref.exists()){
              playerCount=playercountref.val();
              player.getCount();
          }
          form=new Form();
          form.display();
        }
    }
    play() {

    }
    end() {

    }

}