class WelcomeScene extends Phaser.Scene{
  constructor(){
    super({key:'WelcomeScene'})
  }
  preload(){
    // this.load.bitmapFont('CustomFont','assets/font/font.png','assets/font/font.fnt')
    GameAdapter.createShips()
    gameState.ships = Ship.all
    GameAdapter.createStages()
    gameState.stages = Stage.all
  }
  create(){
		this.add.text( 550, 150, 'Welcome!Click to start!', {fill: '#000000', fontSize: '40px',fontFamily:'CustomFont'})

    console.log('you got to the welcome')
		this.input.on('pointerdown', () => {
			this.scene.stop('WelcomeScene')
			this.scene.start('SelectShipScene')
		})}
    update(){}
    }
