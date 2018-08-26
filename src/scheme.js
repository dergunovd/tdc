import html from './scheme.html';
import data from './scheme.json';
import './scheme.sass';

class Scheme {
  constructor() {
    this.scheme = document.getElementById('scheme') || null;
    this.data = data;
    this.elementClickHandler = (event, elem) => {
      const activeElement = this.scheme.getElementsByClassName('scheme__element_active')[0];
      activeElement && activeElement.classList.toggle('scheme__element_active');
      elem.classList.toggle('scheme__element_active');
      this.x = elem.x;
      this.y = elem.y;
      this.id = elem.id;
      this.printInfo();
    };
    this.x = 0;
    this.y = 0;
    this.printSceme();
    this.setFreeOffices();
    
    Array.from(this.scheme.querySelectorAll('.scheme__office, .scheme__exit')).forEach(elem => {
      elem.onclick = (event) => this.elementClickHandler(event, elem);
    });
  }
  
  setFreeOffices() {
    Object.entries(this.data).forEach(([key, value]) => {
      if (value.free) {
        document.getElementById(key).classList.add('scheme__office_free');
      }
    });
  }
  
  printSceme() {
    this.scheme.innerHTML = html;
  }
  
  printInfo() {
    const data = this.data[this.id] || {
      name: '',
      square: '',
      description: '',
      price: ''
    };
    document.getElementById('schemeInfo').innerHTML =
      `<div class="scheme__info__cont">
          ${data.name && `<h2 class="scheme__info__title">${data.name}</h2>`}
          ${(data.square || data.description) ? `<p class="scheme__info__description">${data.square && `Площадь: ${data.square} м²<br />`}${data.description}</p>` : ''}
          ${data.price ? `<span class="scheme__info__price">${data.price} р/м² в месяц</span>` : ''}
        </div>`;
  }
}

new Scheme();