import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* const promise = new Promise( (resolve, reject) => {
      if (false) {
        resolve('hola mundo');
      } else {
        reject('Algo salio mal')
      }
    });

    promise.then((data) => {
      console.log(data);
    })
    .catch(error => {
      console.log('Error en mi promesa, '+ error);
      
    });

    console.log('fin del init'); */
    
    this.getUsers().then(res => {
      console.log(res);
      
    });
  }
  getUsers() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(body => resolve(body.data) );
    });
  }

}
