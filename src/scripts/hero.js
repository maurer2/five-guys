export default function hero(domElement, playerData) {
  const parent = domElement;

  if (playerData === null || domElement === null) {
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
