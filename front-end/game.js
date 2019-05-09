gameState = {}
windowWidth = window.innerWidth
windowHeight = window.innerHeight

const config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    background: "7D7D7D",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0},
          enableBody: true,
        }
    },
    // scene: [WelcomeScene,
    //   SelectionScene,
    //   GameScene,
    //   LeaderboardScene,
    // ]
    scene: [GameScene]

}

const inBounds = (x, y) => {
  let exists = true
  if(x < 0) {
    exists = false
  } else if (x > windowWidth) {
    exists = false
  } else if (y < 0) {
    exists = false
  } else if (y > windowHeight) {
    exists = false
  }
  return exists
}


const game = new Phaser.Game(config)
