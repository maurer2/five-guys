// import Cat from './images/cat.jpeg';
import data from '!./data/data.json';
import { getPlayers, getPlayerNames } from './data/manipulator';

// components
//import menu from './components/menu';

import './style.scss';

const players = getPlayers(data.players);

console.log(players);

const menu = (players) => {
  const navEntries = getPlayerNames(players);

  return `
    <nav>
      <a href="#">${ navEntries.join('') }</a>
      <hr />
    </div>
  `;
}


const menuElement = document.createElement('div');
menuElement.innerHTML = menu(players);

document.body.append(menuElement);


// teststuff
/*
const ImageTest = new Image();
ImageTest.src = Cat;
ImageTest.setAttribute('width', '320');

const testDiv = document.createElement('div');
testDiv.setAttribute('class', 'cat');
const testText = document.createTextNode('Cat');
testDiv.appendChild(testText);

document.body.appendChild(testDiv);
document.body.appendChild(ImageTest);
*/
