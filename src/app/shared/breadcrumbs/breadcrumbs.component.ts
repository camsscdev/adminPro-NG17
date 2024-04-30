import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscribable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  standalone: true,
  imports: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public router = inject(Router);

  public title: string = '';
  public tituloSubs$: Subscription;
  constructor() {
    this.tituloSubs$ = this.getArgumentRoute().subscribe(({ titulo }) => {
      this.title = titulo;
      document.title = `AdminPro -${titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit() {}

  getArgumentRoute() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter(
        (event: any | ActivationEnd) => event.snapshot.firstChild === null
      ),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
