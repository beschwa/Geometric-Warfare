class SubmitLeaderboardScene extends Phaser.Scene{
  constructor(){
    super({key:'SubmitLeaderboardScene'})
  }
  preload(){
    this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.xml')
  this.add.plugin(PhaserInput.Plugin)
  }
  create(){
    var input = this.add.inputField(windowWidth * .40, windowHeight *.20);
  }
  update(){
  }
}
