import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {changeUpdatedAt, clear, countSelector, minus, plus, updatedAtSelector} from "../../../../reducers/counter";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$ = this.store.select(countSelector)
  validButton$ = this.count$.pipe(
    map(value => value <= 0)
  )
  update$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  plus(): void {
    this.store.dispatch(plus())
  }

  minus(): void {
    this.store.dispatch(minus())
  }

  clear(): void {
    this.store.dispatch(clear())
  }
}
