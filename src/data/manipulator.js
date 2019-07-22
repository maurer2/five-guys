// helpers
const positionFallback = 'Player';
const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Striker', 'Winger'];
function getSimplifyFieldPositon(detailedPosition) {
  const containsKnownPosition = positions.some((position => detailedPosition.includes(position)));

  if (!containsKnownPosition) {
    return positionFallback;
  }

  const value = positions.find((position => detailedPosition.includes(position)));

  return value;
}

function getGoalsPerMatch(goals, appearances) {
  return (goals === 0) ? 0 : goals / appearances;
}

function getPassesPerMinute(forwardPass, backwardPass, minsPlayed) {
  const passes = forwardPass + backwardPass;

  return (passes === 0) ? 0 : passes / minsPlayed;
}

function getStatisticsValue(statistics, statisticsName) {
  const entry = statistics.find(statisticsSingle => statisticsSingle.name === statisticsName);

  return (entry === undefined) ? 0 : entry.value;
}

export default function getPlayers(playersData) {
  const players = playersData.map((playerData) => {
    const { player, stats } = playerData;

    // stats - exisiting
    const appearances = getStatisticsValue(stats, 'appearances');
    const goals = getStatisticsValue(stats, 'goals');
    const goalsAssist = getStatisticsValue(stats, 'goal_assist');
    const forwardPass = getStatisticsValue(stats, 'fwd_pass');
    const backwardPass = getStatisticsValue(stats, 'backward_pass');
    const minsPlayed = getStatisticsValue(stats, 'mins_played');

    // stats - calculated
    const goalsPerMatch = getGoalsPerMatch(goals, appearances);
    const passesPerMinute = getPassesPerMinute(forwardPass, backwardPass, minsPlayed);

    const playerMapped = {
      id: player.id,
      fullName: `${player.name.first} ${player.name.last}`,
      team: {
        name: player.currentTeam.name,
        id: player.currentTeam.id,
      },
      position: getSimplifyFieldPositon(player.info.positionInfo),
      statistics: {
        appearances,
        goals,
        goalsAssist,
        goalsPerMatch,
        passesPerMinute,
      },
    };

    return playerMapped;
  });

  return players;
}
