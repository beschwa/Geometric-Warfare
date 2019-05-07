class Ship {
  constructor(id,name,image_url){
    this.id = id
    this.name = name
    this.image_url = image_url
    Ship.all.push(this)
  }
}
  Ship.all = []
