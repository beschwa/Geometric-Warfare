class LeaderboardScene extends Phaser.Scene{
  constructor(){
    super({key:'LeaderboardScene'})
  }
  preload(){
    GameAdapter.getLeaderboard()
  }
  create(){

  }
  update(){

  }
}
