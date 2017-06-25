// ----------------------
// _asyncSvgSprite
// ----------------------

function insert(data) {
  const body = document.body;
  const svg = data.documentElement;
  body.insertBefore(svg, body.firstChild);
}

const asyncSvgSprite = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../images/sprite.min.svg', true);
  xhr.addEventListener('load', () => {
    const data = xhr.response;
    insert(data);
  });
  xhr.responseType = 'document';
  xhr.send();
};

export default asyncSvgSprite;
