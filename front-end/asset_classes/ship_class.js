class Ship {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.image_url = obj.image_url
    Ship.all.push(this)
  }
}
  Ship.all = []
