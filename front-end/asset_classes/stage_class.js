class Stage {
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.image_url = obj.image_url
    Stage.all.push(this)
  }
}
Stage.all =[]
