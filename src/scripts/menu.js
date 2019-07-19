export default class Menu {
  constructor(menuDomElement, players, activePlayer, cb) {
    this.menuDomElement = menuDomElement;
    this.players = players;
    this.activePlayer = activePlayer;
    this.cb = cb;

    this.menuDomElement.addEventListener('change', (event) => {
      this.handleChangeEvent(event);
    });
  }

  handleChangeEvent(event) {
    const element = event.target;
    const options = element.options;

    const selectedOption = options[element.selectedIndex];
    const selectedValue = selectedOption.value;

    this.cb(selectedValue);
  }

  update(players, activePlayer) {
    this.players = players;
    this.activePlayer = activePlayer;

    this.render();
  }

  render() {
    const { players, activePlayer } = this;
    let indexActivePlayer = players.findIndex((player) => player.id == activePlayer);

    if (activePlayer === null) {
      indexActivePlayer = -1;
    }

    const optionElements = players.map((player, index) => `
      <option value="${player.id}" selected="${index == indexActivePlayer}">
        ${player.fullName}
      </option>`
    );

    const selectInnerHTML = `
      <option value="" selected="${indexActivePlayer == -1}" disabled>Select a player...</option>
      ${optionElements.join()}
    `
    this.menuDomElement.innerHTML = selectInnerHTML;
    this.menuDomElement.value = (indexActivePlayer == -1) ? '' : activePlayer;
  }
};
