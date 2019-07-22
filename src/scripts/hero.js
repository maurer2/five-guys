export default function header(domElement, playerData) {
  const parent = domElement;

  if (playerData === null) {
    return;
  }

  const markup = `
    <img
      class="hero-image"
      src="./images/players/p${playerData.id}.png"
      alt="player photo"
    />
  `;

  parent.innerHTML = markup;
}
