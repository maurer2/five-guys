export function getPlayers(playersData) {
  const players = playersData.map((playerData) => {
    const { player } = playerData;

    const playerMapped = {
      id: player.id,
      firstName: player.name.first,
      lastName: player.name.last,
      fullName: `${player.name.first} ${player.name.last}`,
      age: player.age,
      team: player.currentTeam.name
    }

    return playerMapped;
  });

  return players;
}
