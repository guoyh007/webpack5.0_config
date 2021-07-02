import './index.css';
import './index.less';
import './index.scss';

const fs = require('./assets/龙舟.jpg');
console.log('fs: ', fs);
let img = new Image();
img.src = fs;
document.body.appendChild(img);
// console.log('title: ', title);