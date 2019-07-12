class GameAdapter {
  constructor(){}
  static createShips(){
     return fetch('http://localhost:3000/ships')
     .then(resp=>resp.json())
     .then(ships=>{
      ships.forEach(ship=>{new Ship(ship)})
    })
   }
  
  static createStages(){
    return fetch('http://localhost:3000/stages').then(resp=>resp.json()).then(stages=>{
      stages.forEach(stage=>{new Stage(stage)})
    })
  }
  static createLeaderboard(){
    return fetch('http://localhost:3000/leaderboards').then(resp=>resp.json()).then(leaderboards=>{
      leaderboards.forEach(leaderboard=>{new Leaderboard(stage)})
    })
  }
}
