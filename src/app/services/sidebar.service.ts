import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Graph',
          url: 'grafica1'
        },
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'ProgressBar',
          url: 'progress'
        },
        {
          title: 'Promises',
          url: 'promises'
        },
        {
          title: 'RxJs',
          url: 'rxjs'
        }
      ]
    }
  ];

  constructor() { }
}
