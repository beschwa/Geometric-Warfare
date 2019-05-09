class GameScene extends Phaser.Scene{
  constructor(){
    super({key:'GameScene'})
  }
  preload () {
    debugger
      this.load.image('ship', 'http://dianavermilya.github.io/paranormal-site/img/spaceship/spaceship_sprite.png')
      this.load.image('bullet', 'https://i.imgur.com/6L5HXrP.png')
  }

  create () {
    debugger
      gameState.ship = this.physics.add.sprite(300, 300, 'ship').setScale(.5);
      gameState.ship.setCollideWorldBounds(true);
      gameState.bullets = this.physics.add.group();
      this.physics.add.collider(gameState.bullets, this.physics.world.bounds, function (bug) {
          bug.destroy();
          gameState.score += 10;
          gameState.scoreText.setText(`Score: ${gameState.score}`);
      })
      gameState.cursors = this.input.keyboard.createCursorKeys();
      gameState.w = this.input.keyboard.addKey('W')
      gameState.a = this.input.keyboard.addKey('A')
      gameState.s = this.input.keyboard.addKey('S')
      gameState.d = this.input.keyboard.addKey('D')
  }

  update () {
  function bulletGen(destination, secondary) {
        let x;
        switch(destination) {
            case 'up':
                x = gameState.bullets.create(gameState.ship.x, gameState.ship.y, 'bullet');
                x.setVelocityY(-500)
                switch(secondary) {
                    case 'left':
                        x.setVelocityX(-500)
                    break;
                    case 'right':
                        x.setVelocityX(500)
                    break;
                }
                break;
            case 'down':
                x = gameState.bullets.create(gameState.ship.x, gameState.ship.y, 'bullet');
                x.setVelocityY(500)
                switch(secondary) {
                    case 'left':
                        x.setVelocityX(-500)
                    break;
                    case 'right':
                        x.setVelocityX(500)
                    break;
                }
                break;
            case 'left':
                x = gameState.bullets.create(gameState.ship.x, gameState.ship.y, 'bullet');
                x.setVelocityX(-500)
                switch(secondary) {
                    case 'up':
                        x.setVelocityY(-500)
                    break;
                    case 'down':
                        x.setVelocityY(500)
                    break;
                }
                break;
            case 'right':
                x = gameState.bullets.create(gameState.ship.x, gameState.ship.y, 'bullet');
                x.setVelocityX(500)
                switch(secondary) {
                    case 'up':
                        x.setVelocityY(-500)
                    break;
                    case 'down':
                        x.setVelocityY(500)
                    break;
                }
                break;

        }
        x.setCollideWorldBounds(true);
    }


    function handleShip () {
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
        if(gameState.w.isDown){
            if(gameState.a.isDown){
                bulletGen('up', 'left')
            } else if (gameState.d.isDown) {
                bulletGen('up', 'right')
            } else {
                bulletGen('up')
            }
        } else if (gameState.a.isDown){
            if(gameState.w.isDown){
                bulletGen('left', 'up')
            } else if (gameState.s.isDown) {
                bulletGen('left', 'down')
            } else {
                bulletGen('left')
            }
        } else if (gameState.s.isDown){
            if(gameState.a.isDown){
                bulletGen('down', 'left')
            } else if (gameState.d.isDown) {
                bulletGen('down', 'right')
            } else {
                bulletGen('down')
            }
        } else if (gameState.d.isDown){
            if(gameState.w.isDown){
                bulletGen('right', 'up')
            } else if (gameState.s.isDown) {
                bulletGen('right', 'down')
            } else {
                bulletGen('right')
            }
        }
    }
      handleShip();
      handleBullet();
      // game.time.repeat(Phaser.Timer.SECOND * 2, 10, handleBullet, this)
  }


}
