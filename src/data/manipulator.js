export function getPlayers(playersData) {
  const players = playersData.map((playerData) => {
    const { player } = playerData;

    const playerMapped = {
      id: player.id,
      firstName: player.name.first,
      lastName: player.name.last,
      fullname: `${player.name.first} ${player.name.last}`,
      age: player.age,
      team: player.currentTeam.name
    }

    return playerMapped;
  });

  return players;
}

export function getPlayerNames(players) {
  return players.map(player => player.fullname);
}