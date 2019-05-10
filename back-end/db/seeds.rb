# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ship = Ship.create(name:'shippy the ship',image_url:'http://dianavermilya.github.io/paranormal-site/img/spaceship/spaceship_sprite.png',bullet_url:'https://i.imgur.com/6L5HXrP.png')
stage = Stage.create(name:'Blue screen of Death',image_url:'https://i.imgur.com/0m3xDha.jpg',resized_image_url:'https://i.imgur.com/mRUIlaw.jpg',enemy_url:'https://i.imgur.com/WKqQGD1.png')
leaderboard = Leaderboard.create(name:'edwin',score:1000,ship_id:1,stage_id:1)
Ship.create(name:'classic ship',image_url:'https://lh3.googleusercontent.com/6kSnQQipv9rEtUmvjUfd_VUMg9AEZqiPtgS4esH0cPZRrTEjFgCxQkNcJ5RZeYnX5DAbYfMv=w128-h128-e365',bullet_url:'https://i.imgur.com/MNnbvgr.png')
Ship.create(name:'eric the eric',image_url:'https://i.imgur.com/ZXpTYfy.png',bullet_url:'https://i.imgur.com/qrUOHp5.png')
 Stage.create(name:'the other stage',image_url:'https://i.imgur.com/Imi8Pkm.jpg',resized_image_url:'https://i.imgur.com/Zq51WiW.jpg',enemy_url:'https://i.imgur.com/TWO3Ro5.png')
 Stage.create(name:'the last stage',image_url:'https://i.imgur.com/VVHO1i0.jpg',resized_image_url:'https://i.imgur.com/rFlFbvE.jpg',enemy_url:'https://i.imgur.com/WElquuZ.png')
