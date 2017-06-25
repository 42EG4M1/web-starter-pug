// ----------------------
// * _main
// ----------------------

import Test from './modules/Test';
import asyncSvgSprite from './modules/asyncSvgSprite';

const test = new Test(document.getElementById('js-test'), 'Hello, webpack2.');
test.hello();

asyncSvgSprite();
