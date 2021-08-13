import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement } from './../store/counter.actions';
import { getCounter } from './../store/counter.selectors';
import { CounterState } from './../store/counter.state';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  counter: number;
  counterSubscription: Subscription; 

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe(counter => {
      this.counter = counter;
    });
  }
  
  onAddCounter() {
    this.store.dispatch(customIncrement({ counter: +this.counter }));
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
