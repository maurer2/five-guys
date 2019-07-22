export default function statistics(domElement, playerData) {
  const parent = domElement;

  if (playerData === null || domElement === null) {
    return;
  }

  const { statistics: statisticsData } = playerData;
  const fieldMapping = {
    appearances: 'Appearances',
    goals: 'Goals',
    goalsAssist: 'Assists',
    goalsPerMatch: 'Goals per match',
    passesPerMinute: 'Passes per minute',
  };

  const fields = Object.keys(fieldMapping);

  const statisticsEntries = fields.map(field => `
    <dl class="statistics-entry">
      <dt class="statistics-key">${fieldMapping[field]}</dt>
      <dd class="statistics-value">
        ${(field === 'goalsPerMatch' || field === 'passesPerMinute')
    ? statisticsData[field].toFixed(2)
    : statisticsData[field]
}
      </dd>
    </dl>
  `);

  const markup = statisticsEntries.join('');

  parent.innerHTML = markup;
}
