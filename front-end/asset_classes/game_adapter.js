class GameAdapter {
  constructor(){}
  static getShips(){
    return fetch('http://localhost:3000/ships').then(resp=>resp.json())
  }
  static getStages(){
    return fetch('http//localhost:3000/stages').then(resp=>resp.json())
  }
  static getLeaderboard(){
    return fetch('http//localhost:3000/leaderboards').then(resp=>resp.json())
  }
}
