import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  toggleDarkMode;
  darkMode = localStorage.getItem('darkMode');

  constructor() {}

  toSeccion(secccion){
    document.querySelector(`#${secccion}`).scrollIntoView({behavior:'smooth'});
  }

  toggleTheme(ev){
    if(ev.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.setAttribute('color-theme', 'light');
      localStorage.setItem('darkMode', 'false');
    }
  }
}
