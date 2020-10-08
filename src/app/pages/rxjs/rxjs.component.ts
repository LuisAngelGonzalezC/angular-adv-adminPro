import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
    
    /* this.returnObservable().pipe(
      retry(1)
    )
    .subscribe(
      valor => console.log('Subs ',valor),
      error => console.warn('Error', error),
      () => console.info('Obs terminado')
    ); */

    this.intervalSubs = this.returnInterval().subscribe(console.log)
}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return  interval(100)
            .pipe(
            map( val => {
              return val + 1
            }),
            take(10),
            filter(val => (val % 2 ===0) ? true : false));
  }

  returnObservable(): Observable<number> {
    let i:number = -1;

    const obs$ = new Observable<number>( observer => {
      
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 2) {
          i = 0;
          observer.error('i llego a 2');
        }
        else if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000)

    });

    return obs$;
  }

  
}
