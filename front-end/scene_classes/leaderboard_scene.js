class LeaderboardScene extends Phaser.Scene{
  constructor(){
    super({key:'LeaderboardScene'})
  }
  preload(){
    GameAdapter.createLeaderboard()
    gameState.leaderboards = Leaderboard.all
  }
  create(){
  }
  update(){

  }
}
