var Enemy = new Phaser.Class ({
	Extends: Phaser.Physics.Arcade.Image,

	initialize:

	function Enemy (scene)
	{
		Phaser.GameObjects.Image.call(this, scene )
	},
})