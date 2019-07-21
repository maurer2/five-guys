export default function header(headerDomElement, playerData) {
  if (playerData === null) {
    return;
  }

  const newMarkup = `
    <div class="header-column">
      <h1 class="title">${playerData.fullName}</h1>
      <div class="position">${playerData.position}</div>
    </div>
    <div class="header-column">
      <img
        class="crest"
        src="./images/teams/${playerData.team.id}.svg"
        alt="${playerData.team.name}"
      />
    </div>
  `;

  headerDomElement.innerHTML = newMarkup;
}
