class SelectStageScene extends Phaser.Scene{
  constructor(){
    super({key:'SelectStageScene'})
  }
  preload(){
    // debugger
    for(let i = 0; i< gameState.stages.length; i++){this.load.image(`stage${i+1}`,`${gameState.stages[i].resized_image_url}`)}
  }
  create(){
    // debugger
    this.add.text( windowWidth * .41, windowHeight * .15 , 'Select Stage', {fill: '#000000', fontSize: '40px'})
    // let shipBox = this.add.rectangle(800, 350, 900, 250, 0x37c3be)
    let stage1 = gameState.stages[0]
    let stage2 = gameState.stages[1]
    let stage3 = gameState.stages[2]
    let stage1Photo = this.add.image(windowWidth * .20,windowHeight * .40,'stage1')
    stage1Photo.setInteractive()
    stage1Photo.on('pointerup', ()=>{
      gameState.selectedStage = stage1
      this.scene.stop('SelectStageScene')
      this.scene.start('GameScene')
    } )
    let stage2Photo = this.add.image(windowWidth * .50,windowHeight * .40,'stage2')
    stage2Photo.setInteractive()
    stage2Photo.on('pointerup', ()=>{
      gameState.selectedStage = stage2
      this.scene.stop('SelectStageScene')
      this.scene.start('GameScene')
    } )
    let stage3Photo = this.add.image(windowWidth * .80,windowHeight * .40,'stage3')
    stage3Photo.setInteractive()
    stage3Photo.on('pointerup', ()=>{
      gameState.selectedStage = stage3
      this.scene.stop('SelectStageScene')
      this.scene.start('GameScene')
    } )

    //
    this.add.text(windowWidth * .16,windowHeight * .60,`${gameState.stages[0].name}`)
    this.add.text(windowWidth * .465,windowHeight * .60,`${gameState.stages[1].name}`)
    this.add.text(windowWidth * .755,windowHeight * .60,`${gameState.stages[2].name}`)

  }
    update(){}
    }
