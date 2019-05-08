class SelectionScene extends Phaser.Scene{
  constructor(){
    super({key: 'SelectionScene'})
  }
  preload(){
    gameState.ships = []
    GameAdapter.getShips().then(resp=>resp.json()).then(ships=>{
      ships.forEach(ship=>{
        gameState.ships.push(new Ship(ship))
      })
    })

    gameState.stages =[]
    GameAdapter.getStages().then(resp=>resp.json()).then(stages=>{
      stages.forEach(stage=>{
        gameState.stages.push(new Stage(stage))
      })
    })

    let shipBox = this.add.container(200,-200)
  }
  create(){
    this.add.text( 150, 250, 'Select Stage and Ship', {fill: '#000000', fontSize: '20px'})
    console.log(gameState.ships)
    console.log(gameState.stages)
    // gameState.ships = []
    // return fetch('http://localhost:3000/ships')
    // .then(resp=>resp.json()).then(ships=>{
    //   ships.forEach(ship=>{
    //     let newShip = new Ship(ship)
    //     debugger
    //     gameState.ships.push(newShip)
    //   })
    // })
    // debugger
    //   console.log('you made all fetches')
    //   debugger
      // gameState.ship.forEach(ship=>console.log())
      // stages.stage.forEach(stage=>console.log())
  }

  update(){}
}
