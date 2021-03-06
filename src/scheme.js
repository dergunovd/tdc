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
      this.id = elem.getAttribute('data-id');
      this.printInfo();
    };
    this.x = 0;
    this.y = 0;
    this.printSceme();
    this.setLogo();
    this.icons = {
      VK: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548.358 548.358">
        <path d="M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571
          l-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13
          c2.282-5.9,10.854-18.36,25.696-37.397c7.807-10.089,13.99-18.175,18.556-24.267c32.931-43.78,47.208-71.756,42.828-83.939
          l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224,0.568
          c-1.332-0.472-3.234-0.428-5.712,0.144c-2.475,0.572-3.713,0.859-3.713,0.859l-1.431,0.715l-1.136,0.859
          c-0.952,0.568-1.999,1.567-3.142,2.995c-1.137,1.423-2.088,3.093-2.848,4.996c-8.952,23.031-19.13,44.444-30.553,64.238
          c-7.043,11.803-13.511,22.032-19.418,30.693c-5.899,8.658-10.848,15.037-14.842,19.126c-4,4.093-7.61,7.372-10.852,9.849
          c-3.237,2.478-5.708,3.525-7.419,3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995
          c-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806,0.145-13.706
          c0.198-5.903,0.287-9.897,0.287-11.991c0-7.234,0.141-15.085,0.424-23.555c0.288-8.47,0.521-15.181,0.716-20.125
          c0.194-4.949,0.284-10.185,0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137
          c-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71
          c-35.401-0.38-58.148,1.906-68.236,6.855c-3.997,2.091-7.614,4.948-10.848,8.562c-3.427,4.189-3.905,6.475-1.431,6.851
          c11.422,1.711,19.508,5.804,24.267,12.275l1.715,3.429c1.334,2.474,2.666,6.854,3.999,13.134c1.331,6.28,2.19,13.227,2.568,20.837
          c0.95,13.897,0.95,25.793,0,35.689c-0.953,9.9-1.853,17.607-2.712,23.127c-0.859,5.52-2.143,9.993-3.855,13.418
          c-1.715,3.426-2.856,5.52-3.428,6.28c-0.571,0.76-1.047,1.239-1.425,1.427c-2.474,0.948-5.047,1.431-7.71,1.431
          c-2.667,0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558
          c-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267
          c-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427
          c-2.095-0.859-4.281-1.475-6.567-1.854l-78.229,0.568c-7.994,0-13.418,1.811-16.274,5.428l-1.143,1.711
          C0.288,140.146,0,141.668,0,143.763c0,2.094,0.571,4.664,1.714,7.707c11.42,26.84,23.839,52.725,37.257,77.659
          c13.418,24.934,25.078,45.019,34.973,60.237c9.897,15.229,19.985,29.602,30.264,43.112c10.279,13.515,17.083,22.176,20.412,25.981
          c3.333,3.812,5.951,6.662,7.854,8.565l7.139,6.851c4.568,4.569,11.276,10.041,20.127,16.416
          c8.853,6.379,18.654,12.659,29.408,18.85c10.756,6.181,23.269,11.225,37.546,15.126c14.275,3.905,28.169,5.472,41.684,4.716h32.834
          c6.659-0.575,11.704-2.669,15.133-6.283l1.136-1.431c0.764-1.136,1.479-2.901,2.139-5.276c0.668-2.379,1-5,1-7.851
          c-0.195-8.183,0.428-15.558,1.852-22.124c1.423-6.564,3.045-11.513,4.859-14.846c1.813-3.33,3.859-6.14,6.136-8.418
          c2.282-2.283,3.908-3.666,4.862-4.142c0.948-0.479,1.705-0.804,2.276-0.999c4.568-1.522,9.944-0.048,16.136,4.429
          c6.187,4.473,11.99,9.996,17.418,16.56c5.425,6.57,11.943,13.941,19.555,22.124c7.617,8.186,14.277,14.271,19.985,18.274
          l5.708,3.426c3.812,2.286,8.761,4.38,14.853,6.283c6.081,1.902,11.409,2.378,15.984,1.427l73.087-1.14
          c7.229,0,12.854-1.197,16.844-3.572c3.998-2.379,6.373-5,7.139-7.851c0.764-2.854,0.805-6.092,0.145-9.712
          C546.782,404.25,546.115,401.725,545.451,400.298z"/>
      </svg>`,
      FB: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <path id="Facebook__x28_alt_x29_" d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998
            C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41
            h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"/>
        </svg>`,
      INSTA: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
            C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
            h192c61.76,0,112,50.24,112,112V352z"/>
          <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
            c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
          <circle cx="393.6" cy="118.4" r="17.056"/>
      </svg>`
    };
    
    Array.from(this.scheme.querySelectorAll('.scheme__office, .scheme__exit')).forEach(elem => {
      elem.onclick = (event) => this.elementClickHandler(event, elem);
    });
  }
  
  setLogo() {
    // Object.entries(this.data).forEach(([key, value]) => {
    //   if (value.logo) {
    //     document.getElementById(key).innerHTML = `<image xlink:href="http://localhost:3000/logo/${value.logo}" />`;
    //   }
    // });
  }
  
  printSceme() {
    this.scheme.innerHTML = html;
  }
  
  printInfo() {
    const id = this.id;
    const data = this.data[id];
    const element = document.createElement('div');
    element.id = id;
    element.className = 'modal';
    element.innerHTML =
      `<div class="container">
         <div class="row">
            <div class="modal-dialog" style="width:100%">
              <div class="modal-content">
                <div class="modal-text">
                  <div class="container" style="padding: 1em 2em">
                  <div class="modal-header">
                    <h3 class="modal-title scheme__info__title">${data.name ? `${data.logo ? `<img src="/logo/${data.logo}" alt=""> ` : ''}${data.name}` : ''}</h3>
                    <a href="#close" title="Close" class="close">×</a>
                  </div>
                  <div class="modal-body">
                    <div class="scheme__info__cont">
                    ${data.description ? `<div class="scheme__info__description">${data.description}</div>` : ''}
                    ${data.web ? `<div class="scheme__info__web"><a href="http://${data.web}">${data.web}</a></div>` : ''}
                    ${data.phone ? `<div class="scheme__info__phone"><a href="tel:${data.phone}">${data.phone}</a></div>` : ''}
                    ${data.phones && data.phones.length ? `<div class="scheme__info__phone">${data.phones.map(phone => ` <a href="tel:${phone}">${phone}</a>`)}</div>` : ''}
                    ${data.time ? `<div class="scheme__info__time">${data.time}</div>` : ''}
                    <div class="scheme__info__social">
                      ${data.insta ? `<a target="_blank" href="https://instagram.com/${data.insta}">${this.icons.INSTA}</a>` : ''}
                      ${data.vk ? `<a target="_blank" href="https://vk.com/${data.vk}">${this.icons.VK}</a>` : ''}
                      ${data.fb ? `<a target="_blank" href="https://facebook.com/${data.fb}">${this.icons.FB}</a>` : ''}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(element);
    window.location.hash = id;
  }
}

new Scheme();