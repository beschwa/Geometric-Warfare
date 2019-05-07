class GameAdapter {
  constructor(){}
  static getShips(){
    debugger
    let arr = []
    return fetch('http://localhost:3000/ships').then(resp=>{
      resp.json()
      debugger
    })
    .then(ships=>{
      ships.forEach(ship=>{
        let newShip = new Ship(ship)
        return arr.push(newShip)
      })
    })
    // .then(()=>{return arr})
  }

  static getStages(){
    return fetch('http://localhost:3000/stages').then(resp=>resp.json())
    .then(stages=>{stages.forEach(stage=>new Stage(stage))})
  }
  static getLeaderboard(){
    return fetch('http://localhost:3000/leaderboards').then(resp=>resp.json())
    .then(leaderboards=>{leaderboards.forEach(leaderboard=>new leaderboard(leaderboard))})
  }
}
