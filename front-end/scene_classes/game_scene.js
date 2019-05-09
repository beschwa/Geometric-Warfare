class GameScene extends Phaser.Scene{
  constructor(){
    super({key:'GameScene'})
  }
  preload () {
      this.load.image('bg', `${gameState.selectedStage.image_url}`)
      this.load.image('ship', `${gameState.selectedShip.image_url}`)
      this.load.image('bullet', 'https://i.imgur.com/6L5HXrP.png')
      this.load.image('enemy', 'https://i.imgur.com/WElquuZ.png')
      //edwin below
  }

  create () {
      this.add.image(windowWidth/2,windowHeight/2,'bg')
      gameState.lastFired = 0;
      gameState.ship = this.physics.add.sprite(300, 300, 'ship').setScale(.5);
      gameState.ship.setCollideWorldBounds(true);
      gameState.enemy = this.physics.add.sprite(0,0,'enemy').setScale(.25);
      gameState.ship.setCollideWorldBounds(true);
      this.physics.moveToObject(gameState.enemy, gameState.ship, 300)
      gameState.bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 100,
        runChildUpdate: true
      });

      gameState.enemies = this.physics.add.group({
        
      })

      // function enemyGen () {
      //   let xCoord = Math.random() * windowWidth;
      //   let yCoord = Math.random() * windowHeight;
      //   bugs.create(xCoord, 10, 'bug1');
      // }

      // const bugGenLoop = this.time.addEvent({
      //   delay: 100,
      //   callback: bugGen,
      //   callbackScope: this,
      //   loop: true,
      // });

      gameState.bullets.create(100);
      gameState.bulletspeed = Phaser.Math.GetSpeed(300, 1)
      gameState.cursors = this.input.keyboard.createCursorKeys();
      gameState.w = this.input.keyboard.addKey('W')
      gameState.a = this.input.keyboard.addKey('A')
      gameState.s = this.input.keyboard.addKey('S')
      gameState.d = this.input.keyboard.addKey('D')

      //edwin below
  }

  update (time) {


    function handleShip () {
        gameState.ship.setVelocity(0,0)
        if (gameState.cursors.up.isDown){
            if (gameState.cursors.left.isDown){
                gameState.ship.angle = 315
                gameState.ship.setVelocityY(-500);
                gameState.ship.setVelocityX(-500);
            } else if (gameState.cursors.right.isDown){
                gameState.ship.angle = 45
                gameState.ship.setVelocityY(-500)
                gameState.ship.setVelocityX(500);
            } else {
                gameState.ship.angle = 0
                gameState.ship.setVelocityY(-500)
            }
        } else if (gameState.cursors.down.isDown){
            if (gameState.cursors.left.isDown){
                gameState.ship.angle = 225
                gameState.ship.setVelocityY(500);
                gameState.ship.setVelocityX(-500);
            } else if (gameState.cursors.right.isDown){
                gameState.ship.angle = 135
                gameState.ship.setVelocityY(500);
                gameState.ship.setVelocityX(500);
            } else {
                gameState.ship.angle = 180
                gameState.ship.setVelocityY(500)
            }
        } else if (gameState.cursors.left.isDown){
            if (gameState.cursors.up.isDown){
                gameState.ship.angle = 315
                gameState.ship.setVelocityY(-500);
                gameState.ship.setVelocityX(-500);
            } else if (gameState.cursors.down.isDown){
                gameState.ship.angle = 225
                gameState.ship.setVelocityY(500)
                gameState.ship.setVelocityX(-500);
            } else {
                gameState.ship.angle = 270
                gameState.ship.setVelocityX(-500)
            }
        } else if (gameState.cursors.right.isDown){
            if (gameState.cursors.up.isDown){
                gameState.ship.angle = 45
                gameState.ship.setVelocityY(-500);
                gameState.ship.setVelocityX(500);
            } else if (gameState.cursors.down.isDown){
                gameState.ship.angle = 135
                gameState.ship.setVelocityY(500)
                gameState.ship.setVelocityX(500);
            } else {
                gameState.ship.angle = 90
                gameState.ship.setVelocityX(500)
            }
        } else {
            gameState.ship.setVelocityX(0);
            gameState.ship.setVelocityY(0);
        }
    }


    function handleBullet () {
      if(time > gameState.lastFired) {            
      let bullet = gameState.bullets.get();
      if(bullet){
        gameState.lastFired = time + 100;
        if(gameState.w.isDown){
            // let bullet = gameState.bullets.get();
            if(gameState.a.isDown){
                bullet.fire(gameState.ship.x,gameState.ship.y, 7)
                // bulletGen('up', 'left')
            } else if (gameState.d.isDown) {
                bullet.fire(gameState.ship.x,gameState.ship.y, 1)
                // bulletGen('up', 'right')
            } else {
                bullet.fire(gameState.ship.x,gameState.ship.y, 0)
                // bulletGen('up')
            }
        } else if (gameState.a.isDown){
            // let bullet = gameState.bullets.get();
            if(gameState.w.isDown){
                bullet.fire(gameState.ship.x,gameState.ship.y,7)
                // bulletGen('left', 'up')
            } else if (gameState.s.isDown) {
                bullet.fire(gameState.ship.x,gameState.ship.y,5)
                // bulletGen('left', 'down')
            } else {
                bullet.fire(gameState.ship.x,gameState.ship.y,6)
                // bulletGen('left')
            }
        } else if (gameState.s.isDown){
            // let bullet = gameState.bullets.get();
            if(gameState.a.isDown){
                bullet.fire(gameState.ship.x,gameState.ship.y,5)
                // bulletGen('down', 'left')
            } else if (gameState.d.isDown) {
                bullet.fire(gameState.ship.x,gameState.ship.y,3)
                // bulletGen('down', 'right')
            } else {
                bullet.fire(gameState.ship.x,gameState.ship.y,4)
                // bulletGen('down')
            }
        } else if (gameState.d.isDown){
            // let bullet = gameState.bullets.get();
            if(gameState.w.isDown){
                bullet.fire(gameState.ship.x,gameState.ship.y,1)
                // bulletGen('right', 'up')
            } else if (gameState.s.isDown) {
                bullet.fire(gameState.ship.x,gameState.ship.y,3)
                // bulletGen('right', 'down')
            } else {
                bullet.fire(gameState.ship.x,gameState.ship.y,2)
                // bulletGen('right')
            }
        }
    }}}
    //edwin functions definition below


      this.physics.moveToObject(gameState.enemy, gameState.ship, 300)
      handleShip();
      handleBullet();
      //edwin function calls below
      // game.time.repeat(Phaser.Timer.SECOND * 2, 10, handleBullet, this)
  }


}
