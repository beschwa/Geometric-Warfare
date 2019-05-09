class Leaderboard {
  construtor(obj){
    this.id = obj.id
    this.name = obj.name
    this.score = obj.score
    this.ship_id = obj.ship_id
    this.stage_id = obj.stage_id
    Leaderboard.all.push(this)
  }
}
Leaderboard.all=[]
