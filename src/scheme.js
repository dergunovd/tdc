import './scheme.css';
import html from './scheme.html';
require('./scheme.json');

document.getElementById('scheme').innerHTML = html;

const scheme = document.getElementById('scheme');
function elementClickHandler() {
  const activeElement = scheme.getElementsByClassName('scheme__element_active')[0];
  activeElement && activeElement.classList.toggle('scheme__element_active');
  this.classList.toggle('scheme__element_active');
}

Array.from(scheme.querySelectorAll('.scheme__office, .scheme__exit')).forEach(elem => {
  elem.onclick = elementClickHandler;
});