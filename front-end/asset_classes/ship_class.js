class Ship {
  constructor(id,name,image_url){
    this.id = id
    this.name = name
    this.image_url = imageUrl
    Ship.all.push(this)
  }
}
  Ship.all = []
