class SelectionScene extends Phaser.Scene{
  constructor(){
    super({key: 'SelectionScene'})
  }
  preload(){
    gameState.ships = GameAdapter.getShips()
    debugger
    // gameState.info = { ships:GameAdapter.getShips(),
    //   stages: GameAdapter.getStages()
    // }
    // debugger
    // let gameState ={
    //   ship: ships,
    //   stage:stages,
    // }
    let shipBox = this.add.container(200,-200)
  }
  create(){
      console.log('you made all fetches')
      debugger
      // gameState.ship.forEach(ship=>console.log())
      // stages.stage.forEach(stage=>console.log())
  }

  update(){}
}
