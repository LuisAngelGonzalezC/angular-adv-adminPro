import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  private link = document.querySelector('#theme');
  
  constructor() {
    var url = localStorage.getItem('theme') || './assets/css/colors/megna.css';
    this.link.setAttribute('href', url);
  }
  
  changeTheme(theme: string){
    const url = './assets/css/colors/'+theme+'.css';
    this.link.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }
  
  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach( item => {
      item.classList.remove('working');
      
      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = './assets/css/colors/'+ btnTheme +'.css';
      const currentTheme = this.link.getAttribute('href');
      
      if(btnThemeUrl === currentTheme) {
        item.classList.add('working');
      }
    });
  }
}
