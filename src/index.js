// styles
import './style.scss';

// core
import 'core-js/stable';

// data
// eslint-disable-next-line
import * as data from '!./data/data.json';
import getPlayers from './data/manipulator';

// js
import State from './scripts/state';
import Menu from './scripts/menu';
import hero from './scripts/hero';
import header from './scripts/header';
import statistics from './scripts/statistics';

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

    // eslint disable-line
    // menu
    selectMenu.update(state.getPlayerNamesAndId(), state.getActivePlayer());

    // hero
    hero(document.querySelector('.hero'), state.getPlayerData());

    // header
    header(document.querySelector('.header'), state.getPlayerData());

    // statistics
    statistics(document.querySelector('.statistics'), state.getPlayerData());
  },
);
selectMenu.render();
