class GameAdapter {
  constructor(){}
  static createShips(){
     fetch('http://localhost:3000/ships')
     .then(resp=>resp.json())
     .then(ships=>{
      ships.forEach(ship=>{new Ship(ship)})
    })
  }
  static createStages(){
    fetch('http://localhost:3000/stages').then(resp=>resp.json()).then(stages=>{
      stages.forEach(stage=>{new Stage(stage)})
    })
  }
  static getLeaderboard(){return fetch('http://localhost:3000/leaderboards')}
}
