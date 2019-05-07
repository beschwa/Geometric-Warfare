class WelcomeScene extends Phaser.Scene{
  constructor(){
    super({key:'WelcomeScene'})
  }
  preload(){

  }
  create(){
		this.add.text( 150, 250, 'Welcome!Click to start!', {fill: '#000000', fontSize: '20px'})
    console.log('you got to the welcome')
		this.input.on('pointerdown', () => {
			this.scene.stop('WelcomeScene')
			this.scene.start('SelectionScene')
		})}
    update(){}
    }
