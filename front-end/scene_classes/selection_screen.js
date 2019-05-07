class SelectionScene extends Phaser.Scene{
  constructor(){
    super({key: 'SelectionScene'})
  }
  create(){

    const ships = GameAdapter.getShips().then(ships=>{
      ships.forEach(ship=>{
        return new Ship(ship))
      })
    })
    const stages = GameAdapter.getStages().then(stages=>{
      stages.forEach(ship=>{
      return new Stage(stage)
      })
    })




  }
}
