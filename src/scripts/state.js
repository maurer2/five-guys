export default class State {
  constructor(players) {
    this.players = players;
    this.activePlayer = null;

    console.log(players);
  }

  setActivePlayer(activePlayer) {
    if (activePlayer == null) {
      return;
    }

    this.activePlayer = activePlayer;
  }

  getActivePlayer() {
    return this.activePlayer;
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

  getActivePlayerById(activePlayerId) {
    return this.players.filter(player => player.id === activePlayerId);
  }

  getPlayerData() {
    if (this.activePlayer === null) {
      return null;
    }

    const [activePlayer] = this.players.filter(player => player.id === this.activePlayer);

    return activePlayer;
  }
}
