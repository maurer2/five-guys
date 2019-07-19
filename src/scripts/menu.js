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

    this.cb(parseInt(selectedValue, 10));
  }

  update(players, activePlayer) {
    this.players = players;
    this.activePlayer = activePlayer;

    this.render();
  }

  render() {
    const { players, activePlayer, menuDomElement } = this;
    const indexActivePlayer = players.findIndex((player) => player.id === activePlayer);

    const optionElements = players.map((player, index) => `
      <option value="${player.id}" selected="${index === indexActivePlayer}">
        ${player.fullName}
      </option>`
    );

    const defaultOptionElement = `
      <option value="" selected="${indexActivePlayer === -1}" disabled>
        Select a player...
      </option>
    `

    menuDomElement.innerHTML = `
      ${defaultOptionElement}
      ${optionElements.join('')}
    `

    menuDomElement.value = (indexActivePlayer === -1) ? '' : activePlayer;
  }
};
