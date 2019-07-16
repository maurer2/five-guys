import './style.scss'
import Cat from './cat.jpeg';

console.log('cat');

const ImageTest = new Image();
ImageTest.src = Cat;
ImageTest.setAttribute('width', '320');

const testDiv = document.createElement('div');
testDiv.setAttribute('class', 'cat');
const testText = document.createTextNode('Cat');
testDiv.appendChild(testText);

document.body.appendChild(testDiv);
document.body.appendChild(ImageTest);
