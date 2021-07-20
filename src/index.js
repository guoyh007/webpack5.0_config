// import _ from 'lodash';
// import printMe from './print.js';

import styles from './index.css';
console.log('styles: ', styles);
import './index.less';
import './index.scss';
import Data from './data.xml';
import Notes from './data.csv';

console.log('Data: ', Data);
console.log('Notes: ', Notes);

const fs = require('./assets/龙舟.jpg');
console.log('fs: ', fs);
let img = new Image();
img.src = fs;
document.body.appendChild(img);

// function component() {
//   const element = document.createElement('div');
//   console.log('element: ', element);
//   const btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// async function getComponent() {
//   const element = document.createElement('div');
//   const { default: _ } = await import('lodash');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' @@');
//   return element;
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

// import { cube } from "./math";

// if (process.env.NODE_ENV === 'development') {
//   console.log(' @@@', '这特么是生产环境');
// }

// function component() {
//   const element = document.createElement('pre');

//   element.innerHTML = [
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ].join('\n\n');
//   console.log(cube);
//   return element;
// }

// document.body.appendChild(component());
