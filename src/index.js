// styles
import './style.scss';

// data
import data from '!./data/data.json';
import { getPlayers } from './data/manipulator';

// js
import State from './scripts/state';
import Menu from './scripts/menu';

// scripts
const players = getPlayers(data.players);
const state = new State(players);

// debug
window.state = state;

// menu
const selectMenu = new Menu(
  document.querySelector('.nav-box'),
  state.getPlayerNamesAndId(),
  state.getActivePlayer(),
  (newActivePlayer) => {
    state.setActivePlayer(newActivePlayer);

    selectMenu.update(
      state.getPlayerNamesAndId(),
      state.getActivePlayer(),
    )
  }
);
selectMenu.render();
