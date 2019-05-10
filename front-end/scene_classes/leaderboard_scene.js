class LeaderboardScene extends Phaser.Scene{
  constructor(){
    super({key:'LeaderboardScene'})
  }
  preload(){
    this.load.image('background','https://i.imgur.com/2uONaBL.jpg')
  }
  create(){
  this.add.image(windowWidth * .50,windowHeight * .55,'background')
    this.add.text(windowWidth*.40,windowHeight*.10,'Leaderboards',{fill:'#ffffff',fontSize:'40px'})
    window.alert('this would be the leaderboards')
    // let leaderboard1 = gameState.leaderboards[0]
    // let leaderboard2 = gameState.leaderboards[1]
    // let leaderboard3 = gameState.leaderboards[2]
    // let leaderboard4 = gameState.leaderboards[3]
    // let leaderboard5 = gameState.leaderboards[4]
    //
    // // if(leaderboard1){
      this.add.text(windowWidth * .40, windowHeight * .15,`1.)
      name, score: nil`)
    // // }
    }
  update(){}
}