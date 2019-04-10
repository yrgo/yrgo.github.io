'use strict';

const colors = document.querySelectorAll('section div');

colors.forEach(color => color.addEventListener('click', event => {
  const copy = document.createElement('textarea');

  copy.value = event.target.textContent;

  copy.setAttribute('readonly', '');

  Object.assign(copy.style, {
    all: 'unset',
    contain: 'strict',
    fontSize: '12pt',
    left: '-9999px',
    opacity: 0,
    position: 'absolute',
  });

  document.body.appendChild(copy);

  copy.select();

  try {
    document.execCommand('copy');

    event.target.textContent = 'Copied!';

    setTimeout(() => {
      event.target.textContent = event.target.dataset.color;
    }, 1000);
  }  catch (err) {}

  document.body.removeChild(copy);
}));