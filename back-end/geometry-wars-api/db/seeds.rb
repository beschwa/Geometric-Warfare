# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ship = Ship.create(name:'shippy the ship',image_url:'http://dianavermilya.github.io/paranormal-site/img/spaceship/spaceship_sprite.png')
stage = Stage.create(name:'the big stage',image_url:'https://i.imgur.com/Gh4LZnk.png',resized_image_url:'https://i.imgur.com/mRUIlaw.jpg')
leaderboard = Leaderboard.create(name:'edwin',score:1000,ship_id:1,stage_id:1)
Ship.create(name:'classic ship',image_url:'https://lh3.googleusercontent.com/6kSnQQipv9rEtUmvjUfd_VUMg9AEZqiPtgS4esH0cPZRrTEjFgCxQkNcJ5RZeYnX5DAbYfMv=w128-h128-e365')
Ship.create(name:'shippy the second',image_url:'https://image.flaticon.com/icons/png/128/270/270105.png')
 puts'u did that shit sis'
 Stage.create(name:'the other stage',image_url:'https://i.imgur.com/Imi8Pkm.jpg',resized_image_url:'https://i.imgur.com/Zq51WiW.jpg')
 Stage.create(name:'the last stage',image_url:'https://i.imgur.com/VVHO1i0.jpg',resized_image_url:'https://i.imgur.com/rFlFbvE.jpg')
