import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-icons',
  templateUrl: './contact-icons.component.html',
  styleUrls: ['./contact-icons.component.scss']
})
export class ContactIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMouse (iconImageElement, color) {
    const enteredElement = document.querySelectorAll(`.icon__img--${iconImageElement}`);

    setTimeout(function () {
      enteredElement.forEach(function (el) {
        el.setAttribute('style', `fill:${color} !important`);
      })
    }, 500)
  }

}
