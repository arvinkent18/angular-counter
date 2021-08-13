import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment());
    // this.increment.emit();
  }

  onDecrement() {
    this.store.dispatch(decrement());
    // this.decrement.emit();
  }

  onReset() {
    this.store.dispatch(reset());
    // this.reset.emit();
  }

}
