import { getCounter } from './../store/counter.selectors';
import { CounterState } from './../store/counter.state';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit, OnDestroy {
  // @Input() counter;
  counter: number;
  // counter$: Observable<{ counter: number }>;
  counterSubscription: Subscription;

  constructor(private store: Store<{ counter: CounterState } >) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe(counter => {
      this.counter = counter;
    });
    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
