import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor() {}

  toSeccion(secccion){
    document.querySelector(`#${secccion}`).scrollIntoView({behavior:'smooth'});
  }
}
