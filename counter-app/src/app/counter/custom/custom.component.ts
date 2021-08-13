import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from './../store/counter.actions';
import { CounterState } from './../store/counter.state';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  value: number; 

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
  }
  
  onAdd() {
    this.store.dispatch(customIncrement({ counter: +this.value }));
  }
}
