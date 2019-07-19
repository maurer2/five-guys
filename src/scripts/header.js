export default function header(headerDomElement, players, activePlayer) {
  const activePlayerObject = players.find((player) => player.id === activePlayer);

  const title = activePlayerObject.fullName;

  const newMarkup = `
    <div class="header-column">
      <h1 class="title">${title}</h1>
      <div class="position">Defender</div>
    </div>
    <div class="header-column">
      <img class="logo" src="./images/arsenal.svg" alt="" />
    </div>
  `

  headerDomElement.innerHTML = newMarkup;
}
