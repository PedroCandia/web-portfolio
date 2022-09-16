import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  toggleDarkMode;
  darkMode = localStorage.getItem('darkMode');

  technologies1 =  [
    {attribute: 'HTML', srcImg: 'assets/icon/html.png'},
    {attribute: 'CSS', srcImg: 'assets/icon/css.png'},
    {attribute: 'JavaScript', srcImg: 'assets/icon/js.png'},
    {attribute: 'Angular', srcImg: 'assets/icon/angular.png'},
  ];

  technologies2 =  [
    {attribute: 'Ionic', srcImg: 'assets/icon/ionic.png'},
    {attribute: 'Git', srcImg: 'assets/icon/git.png'},
    {attribute: 'NodeJS', srcImg: 'assets/icon/nodejs.png'},
    {attribute: 'Firebase', srcImg: 'assets/icon/firebase.png'},
  ];

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
