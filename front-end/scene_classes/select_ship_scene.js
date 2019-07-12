class SelectShipScene extends Phaser.Scene{
  constructor(){
    super({key: 'SelectShipScene'})
  }
  preload(){
    this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.xml')
    this.load.image('background','https://i.imgur.com/2uONaBL.jpg')
    for(let i = 0; i< gameState.ships.length; i++){
      this.load.image(`ship${i+1}`,`${gameState.ships[i].image_url}`)
    }
    // this.load.image('ship1',`${gameState.ships[0].image_url}`)
    // this.load.image('ship2',`${gameState.ships[1].image_url}`)
    // this.load.image('ship3',`${gameState.ships[2].image_url}`)
    }
  create(){
      this.add.image(windowWidth * .50,windowHeight * .55,'background')
    // this.add.text(windowWidth*.40,windowHeight*.10,'Leaderboards',{fill:'#ffffff',fontSize:'40px'})
    // this.add.bitmapText( windowWidth * .35, windowHeight * .15 , 'font', 'SELECT SHIP')
    this.add.bitmapText( windowWidth * .35, windowHeight * .15 , 'font', 'SELECT SHIP')
    // let shipBox = this.add.rectangle(800, 350, 900, 250, 0x37c3be)
    let ship1 = gameState.ships[0]
    let ship2 = gameState.ships[1]
    let ship3 = gameState.ships[2]
    let ship1Photo = this.add.image(windowWidth * .20,windowHeight * .40,'ship1')
    ship1Photo.setInteractive()
    ship1Photo.on('pointerup', ()=>{
      gameState.selectedShip = ship1
      this.scene.stop('SelectShipScene')
      this.scene.start('SelectStageScene')
    } )
    let ship2Photo = this.add.image(windowWidth * .50,windowHeight * .40,'ship2')
    ship2Photo.setInteractive()
    ship2Photo.on('pointerup', ()=>{
      gameState.selectedShip = ship2
      this.scene.stop('SelectShipScene')
      this.scene.start('SelectStageScene')
    } )
    let ship3Photo = this.add.image(windowWidth * .80,windowHeight * .40,'ship3')
    ship3Photo.setInteractive()
    ship3Photo.on('pointerup', ()=>{
      gameState.selectedShip = ship3
      this.scene.stop('SelectShipScene')
      this.scene.start('SelectStageScene')
    } )

    //
    this.add.text(windowWidth * .16,windowHeight * .50,`${gameState.ships[0].name}`)
    this.add.text(windowWidth * .465,windowHeight * .50,`${gameState.ships[1].name}`)
    this.add.text(windowWidth * .755,windowHeight * .50,`${gameState.ships[2].name}`)

  }

  update(){}
}
