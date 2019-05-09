var Enemy = new Phaser.Class ({
	Extends: Phaser.Physics.Arcade.Image,

	initialize:

	function Enemy (scene)
	{
		let xCoord = Math.random() * windowWidth
        let yCoord = Math.random() * windowHeight
		Phaser.GameObjects.Image.call(this, scene, xCoord, yCoord, 'enemy')
	},

	update: function(time, delta)
	{
		debugger
	},
})