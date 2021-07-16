// import _ from 'lodash';
// import printMe from './print.js';

// import styles from './index.css';
// console.log('styles: ', styles);
// import './index.less';
// import './index.scss';
// import Data from './data.xml';
// import Notes from './data.csv';

// console.log('Data: ', Data);
// console.log('Notes: ', Notes);

// const fs = require('./assets/龙舟.jpg');
// console.log('fs: ', fs);
// let img = new Image();
// img.src = fs;
// document.body.appendChild(img);

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

//! vendor打包
// import _ from 'lodash';
// import Print from './print';

// function component() {
//   const element = document.createElement('div');

//   // lodash 是由当前 script 脚本 import 进来的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.onclick = Print.bind(null, 'Hello webpack!');

//   return element;
// }

// document.body.appendChild(component());

import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
