var Bullet = new Phaser.Class({
        Extends: Phaser.Physics.Arcade.Image,

        initialize:

        function Bullet (scene)
        {
          Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
          // this.speed = Phaser.Maath.GetSpeed(40000, 100000000000);
        },

        fire: function (x, y, direction)
        {
          this.setPosition(x, y);
            switch(direction) {
                case 0:
                    this.setVelocityY(-500)
                break

                case 1:
                	this.setVelocity(500, -500)
                break

                case 2:
                	this.setVelocityX(500)
                break

                case 3:
                	this.setVelocity(500, 500)
                break

                case 4:
                    this.setVelocityY(500)
                break

                case 5:
                	this.setVelocity(-500, 500)
                break

                case 6:
                    this.setVelocityX(-500)
                break

                case 7:
                	this.setVelocity(-500, -500)
                break

            }
            
          this.setActive(true);
          this.setVisible(true);
        },

        // create()
        // // preUpdate: function(time, delta) 
        // // {
        // // 	console.log("yay")
        // // 	console.log(this.inWorld)
        // // },
        update: function(time, delta)
        {
          if(this.active){
	          if (!inBounds(this.x, this.y))
	          {
	            this.setActive(false);
	            this.setVisible(false);
	            this.setVelocity(0,0);
	          }
	      }
        }
      });



// gameState.bullets.fire(gameState.ship.x,gameState.ship.y)