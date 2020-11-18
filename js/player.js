class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;

    }
    getPlayercount() {
        database.ref('playercount').on("value", (data) => {
            playerCount = data.val();
        });

    }
     updatePlayercount(count){
        database.ref('/').update({
            playercount:count
        })

     }
     update(){
         var playerRef="players/player"+this.index;
         database.ref(playerRef).update({
            name:this.name,
            distance:this.distance
         })
     }   
}