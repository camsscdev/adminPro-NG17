import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  interval,
  map,
  retry,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  standalone: true,
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs?: Subscription;
  constructor() {
    // this.returnObservable()
    //   .pipe(retry(4))
    //   .subscribe(
    //     (valor) => console.log('subs', valor),
    //     (error) => console.warn('pailis', error),
    //     () => console.info('terminado')
    //   );

    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnInit() {}

  returnInterval() {
    const interval$ = interval(1000).pipe(
      // take(10)
      map((valor) => {
        return valor + 1;
      }),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
    return interval$;
  }

  returnObservable() {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }
}
