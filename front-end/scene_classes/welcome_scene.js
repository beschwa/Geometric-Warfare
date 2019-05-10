class WelcomeScene extends Phaser.Scene{
  constructor(){
    super({key:'WelcomeScene'})
  }
  preload(){
    this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.xml')
    // this.load.bitmapFont('CustomFont','assets/font/font.png','assets/font/font.fnt')
    GameAdapter.createShips().then(()=>{gameState.ships = Ship.all})
    GameAdapter.createStages().then(()=>{gameState.stages = Stage.all})
    while(gameState.user === "") {
      gameState.user = window.prompt("What's ya name!?")
    }

  }
  create(){
		// this.add.text( 650, 150, 'Click to start!', {fill: '#000000', fontSize: '40px',fontFamily:'CustomFont'})

    // console.log('you got to the welcome')
		// this.input.on('pointerdown', () => {
			this.scene.stop('WelcomeScene')
      this.scene.start('SelectShipScene')
		// })
  }
    update(){}
    }
