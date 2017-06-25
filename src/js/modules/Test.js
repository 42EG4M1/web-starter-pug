// ----------------------
// _test
// ----------------------

/* eslint-disable no-console */

export default class Test {
  constructor(elm, text) {
    this.elm = elm;
    this.text = text;
  }
  hello() {
    this.elm.innerHTML = this.text;
    console.log(this.text);
  }
}
