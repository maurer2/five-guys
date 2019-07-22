export default function header(domElement, playerData) {
  const parent = domElement;

  if (playerData === null || domElement === null) {
    return;
  }

  const newMarkup = `
    <div class="text-column">
      <h1 class="title">${playerData.fullName}</h1>
      <div class="position">${playerData.position}</div>
    </div>
    <div class="crest-column">
      <img
        class="crest"
        src="./images/teams/${playerData.team.id}.svg"
        alt="${playerData.team.name}"
      />
    </div>
  `;

  parent.innerHTML = newMarkup;
}
