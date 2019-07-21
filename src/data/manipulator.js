// helpers
function getNestedProperty(containerArray, propertyName) {
  const entry = containerArray.filter(entry => entry.name === propertyName);
  const [value] = entry;

  return value;
}

const positionFallback = 'Player';
const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Striker', 'Winger'];
function getSimplifyFieldPositon(detailedPosition) {
  const containsKnownPosition = positions.some((position => detailedPosition.includes(position)));

  if (!containsKnownPosition) {
    return positionFallback;
  }

  const [value] = positions.filter((position => detailedPosition.includes(position)));

  return value;
}

function calculateGoalsPerMatch(goalsObject, appearancesObject) {
  const value = goalsObject.value / appearancesObject.value;

  return {
    name: 'Goals per Match',
    value: value.toFixed(2),
  };
}

function calculatePassesPerMinute(forwardsPassesObject, backwardsPassesObject, minsPlayedObject) {
  const value = (forwardsPassesObject.value + backwardsPassesObject.value) / minsPlayedObject.value;

  return {
    name: 'Passes per Minute',
    value: value.toFixed(2),
  };
}

export function getPlayers(playersData) {
  const players = playersData.map((playerData) => {
    const { player, stats } = playerData;

    const playerMapped = {
      id: player.id,
      // firstName: player.name.first,
      // lastName: player.name.last,
      fullName: `${player.name.first} ${player.name.last}`,
      team: {
        name: player.currentTeam.name,
        id: player.currentTeam.id,
      },
      position: getSimplifyFieldPositon(player.info.positionInfo),
      statistics: {
        appearances: getNestedProperty(stats, 'appearances'),
        goals: getNestedProperty(stats, 'goals'),
        // goalsAssist: getNestedProperty(stats, 'goal_assist'),
        goalsPerMatch: calculateGoalsPerMatch(
          getNestedProperty(stats, 'goals'),
          getNestedProperty(stats, 'appearances'),
        ),
        passesPerMinute: calculatePassesPerMinute(
          getNestedProperty(stats, 'fwd_pass'),
          getNestedProperty(stats, 'backward_pass'),
          getNestedProperty(stats, 'mins_played'),
        ),
      },
    };

    return playerMapped;
  });

  return players;
}
