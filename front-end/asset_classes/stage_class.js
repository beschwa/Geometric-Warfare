class Stage {
  constructor(id,name,image_url){
    this.id = id
    this.name = name
    this.image_url = image_url
    Stage.all.push(this)
  }
}
Stage.all =[]
