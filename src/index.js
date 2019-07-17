// styles
import './style.scss';

// data
import data from '!./data/data.json';
import { getPlayers } from './data/manipulator';

// js
import State from './scripts/state';
import menu from './scripts/menu';

const players = getPlayers(data.players);
const state = new State(players);

const refreshPage = () => {
  console.log('refresh page');
}

// debug
window.state = state;

// menu
const menuMarkup = menu(state.getPlayerNamesAndId());
const menuDomElement = document.querySelector('.nav-box');

menuDomElement.innerHTML = menuMarkup;
menuDomElement.addEventListener('change', (event) => {
  const element = event.target;
  const options = element.options;

  const selectedOption = options[element.selectedIndex];
  const selectedId = selectedOption.value;

  console.log(selectedId);
})

