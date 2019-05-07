# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ship = Ship.create(name:'shippy the ship',image_url:'http://4.bp.blogspot.com/-P9FHN1voYns/U9qAZLaTsGI/AAAAAAAABwE/lt2zrjGhS8A/s1600/bluespaceship.png')
stage = Stage.create(name:'the big stage',image_url:'https://ak9.picdn.net/shutterstock/videos/18681329/thumb/1.jpg?i10c=img.resize(height:160)')
leaderboard = Leaderboard.create(name:'edwin',score:1000,ship_id:1,stage_id:1)
 puts'u did that shit sis'
