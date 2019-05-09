class GameScene extends Phaser.Scene{
  constructor(){
    super({key:'GameScene'})
  }
  preload () {
    debugger
      this.load.image('bg', `${gameState.selectedStage.image_url}`)
      this.load.image('ship', `${gameState.selectedShip.image_url}`)
      this.load.image('bullet', `${gameState.selectedShip.bullet_url}`)
      this.load.image('enemy', `${gameState.selectedStage.enemy_url}`)
      //edwin below
  }

  create () {
    // debugger
      this.add.image(windowWidth/2,windowHeight/2,'bg')
      gameState.score = 0;
      gameState.scoreText = this.add.text(windowWidth*.5, windowHeight*.1, 'Score: 0', {fontSize: '15px', fill: '#000000' })
      gameState.lastFired = 0;
      gameState.ship = this.physics.add.sprite(300, 300, 'ship').setScale(.5);
      gameState.ship.setCollideWorldBounds(true);
      // gameState.enemy = this.physics.add.sprite(0,0,'enemy').setScale(.25);
      gameState.ship.setCollideWorldBounds(true);
      // this.physics.moveToObject(gameState.enemy, gameState.ship, 300)
      gameState.bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 100,
        runChildUpdate: true
      });

      gameState.enemies = this.physics.add.group({

        classType: Enemy,
        // runChildUpdate: true
      })

      function enemyGen () {
        let xCoord = Math.random() * windowWidth
        let yCoord = Math.random() * windowHeight
        gameState.enemies.create(xCoord, yCoord, 'enemy').setScale(.18)
      }

      gameState.enemyGenLoop = this.time.addEvent({
        delay: 500,
        callback: enemyGen,
        callbackScope: this,
        loop: true,
      })

      this.physics.add.collider(gameState.enemies, gameState.bullets, function (enemy) {
        enemy.destroy();
        gameState.score += 10
        gameState.scoreText.setText(`Score: ${gameState.score}`)
      })

      this.physics.add.collider(gameState.ship, gameState.enemies, () => {
        gameState.enemyGenLoop.loop = false
        this.physics.pause();
        this.add.text(windowWidth*.42, windowHeight*.45, 'Game Over', { fontSize: '50px', fill: '#FFFFFF' })
        this.add.text(windowWidth*.42, windowHeight*.55, 'Press Space/Click to Restart', { fontSize: '15px', fill: '#FFFFFF' })

        this.input.on('pointerup', () => {
          this.scene.restart();
        })
      })

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
    // debugger

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
    //Credits: Danko

      if(gameState.enemies.getChildren().length > 0){
        for(let i = 0; i < gameState.enemies.getChildren().length; i++) {
        this.physics.moveToObject(gameState.enemies.getChildren()[i], gameState.ship, 250)
        }
      }
    

      handleShip();
      handleBullet();
    //edwin functions definition below

}


}
