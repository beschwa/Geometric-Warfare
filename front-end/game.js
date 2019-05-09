gameState = {}
windowWidth = window.innerWidth
windowHeight = window.innerHeight

const config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "7D7D7D",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0},
          enableBody: true,
        }
    },
    scene: [WelcomeScene,
      SelectShipScene,
      SelectStageScene,
      GameScene,
    //   LeaderboardScene,
  ]


}



const game = new Phaser.Game(config)
