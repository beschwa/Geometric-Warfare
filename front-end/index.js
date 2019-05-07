gameState = {}

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "7D7D7D",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0},
          enableBody: true,
        }
    },
    scene: {[WelcomeScene,
      SelectionScene,
      GameScene,
      LeaderboardScene]
        // preload,
        // create,
        // update
    }

}

const game = new Phaser.Game(config)
