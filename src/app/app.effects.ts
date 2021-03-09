import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeUpdatedAt, minus, plus, clear} from "./reducers/counter";
import {map} from "rxjs/operators";

@Injectable()
export class AppEffects {

  updateAt = createEffect(() => this.actions$.pipe(
    ofType(plus, minus, clear),
    map(() => changeUpdatedAt({updatedAt: Date.now()}))
  ))

  constructor(private actions$: Actions) {}
}
