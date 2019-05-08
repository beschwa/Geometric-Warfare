class SelectShipScene extends Phaser.Scene{
  constructor(){
    super({key: 'SelectShipScene'})
  }
  preload(){
    debugger
    this.load.image('ship1',`${gameState.ships[0].image_url}`)
    }
  create(){
    this.add.text( 650, 150, 'Select Ship', {fill: '#000000', fontSize: '40px'})
    let shipBox = this.add.rectangle(800, 350, 900, 250, 0x37c3be)
    this.add.image(400,400,'ship1')
  //   shipBox.setOrigin(0,0)
  //   gameState.shipBoxes =[]
  //   const spacing = 440 / gameState.ships.length;
  //   const translation = spacing / 2;
  //
  //   for (let i = 0; i < gameState.ships.length; i++) {
  //   // Create each of the palette circles with one of the colors from the palette
  //   let ship = gameState.ship[i];
  //   let shipContainer = this.add.circle(translation + spacing * i, 515, 22, color);
  //
  //   paletteCircle.strokeColor = 0x000000;
  //   paletteCircle.isStroked = true;
  //   paletteCircle.lineWidth = 2;
  //   paletteCircle.setInteractive();
  //
  //   paletteCircle.on('pointerdown', function() {
  //     gameState.selectedColor = this.color;
  //   }, { color });
  //
  //   paletteCircle.on('pointerover', function() {
  //     this.strokeColor = 0xffffff;
  //   });
  //
  //   paletteCircle.on('pointerout', function() {
  //     this.paletteCircle.strokeColor = 0x000000;
  //     if (gameState.selectedColor === this.color) {
  //       for (let circle of gameState.paletteCircles) {
  //         circle.strokeColor = 0x000000;
  //       }
  //       this.paletteCircle.strokeColor = 0xffc836;
  //     }
  //   }, { paletteCircle, color })
  //
  //   gameState.paletteCircles.push(paletteCircle);
  // }
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
