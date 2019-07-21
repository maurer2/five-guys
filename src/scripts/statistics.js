export default function statistics(domElement, playerData) {
  if (playerData === null) {
    return;
  }

  const statisticsFields = Object.keys(playerData.statistics);
  const statisticsElements = statisticsFields.map(statisticsField => `
    <dl class="statistics-entry">
      <dt class="statistics-key">${playerData.statistics[statisticsField].name}</dt>
      <dd class="statistics-value">${playerData.statistics[statisticsField].value}</dd>
    </dl>
  `);

  const markup = `
    ${statisticsElements.join('')}
  `;

  domElement.innerHTML = markup;
}
