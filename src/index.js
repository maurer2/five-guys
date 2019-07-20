// styles
import './style.scss';

import 'core-js/stable';

// data
import data from '!./data/data.json';
import { getPlayers } from './data/manipulator';

// js
import State from './scripts/state';
import Menu from './scripts/menu';
import header from './scripts/header';

// scripts
const players = getPlayers(data.players);
const state = new State(players);

// debug
window.state = state;

// update page
const updatePage = () => {
  // menu
  selectMenu.update(
    state.getPlayerNamesAndId(),
    state.getActivePlayer(),
  )

  // header
  header(
    document.querySelector('.header'),
    state.getPlayerData()
  )
}

// menu
const selectMenu = new Menu(
  document.querySelector('.nav-box'),
  state.getPlayerNamesAndId(),
  state.getActivePlayer(),
  (newActivePlayer) => {
    state.setActivePlayer(newActivePlayer);

    updatePage();
  }
);
selectMenu.render();
