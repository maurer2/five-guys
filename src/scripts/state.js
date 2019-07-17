export default class State {
  constructor(players) {
    this.players = players;
    this.activePlayer = null;

    console.log(players);
  }

  setActivePlayer(id) {
    if (id == null) {
      return;
    }

    this.id = id;
  }

  getActivePlayer() {
    return '12345';
  }

  getPlayerNames() {
    if (this.players.length === 0) {
      return [];
    }

    return this.players.map(player => player.fullname);
  }

  getPlayerNames() {
    if (this.players.length === 0) {
      return [];
    }

    return this.players.map(player => player.fullname);
  }

  getPlayerNamesAndId() {
    if (this.players.length === 0) {
      return [];
    }

    return this.players.map(player => ({
      fullName: player.fullName,
      id: player.id,
    }));
  }
}
