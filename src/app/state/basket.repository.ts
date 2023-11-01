import { Injectable } from "@angular/core";

import { BasketStore } from "./basket.interface";
import {Store, Select, Selector, State, Action, StateContext} from '@ngxs/store';
import {SetBasket} from "./basket.actions";
import {StoreOptions} from "@ngxs/store/src/symbols";
import {StateClass} from "@ngxs/store/internals";

@State<BasketStore[]>({
  name: 'BasketStore',
  defaults: []
})
@Injectable()
export class BasketRepository {
  constructor() {
  }

  @Selector()
  static selectBaskets() {
    return State;
  }

  @Action(SetBasket)
  setBasket(
    { getState, patchState }: StateContext<BasketStore>,
    action: SetBasket
  ) {
    patchState([]);
    /*
    const state = getState();
    const bookId = action.payload.id;

    if (state.ids.indexOf(action.payload.id) === -1) {
      patchState({ ids: [...state.ids, bookId] });
    }*/
  }


  /*
  @Action(SetBasket)
  setBasket(
    { getState, patchState }: StateContext<CollectionStateModel>,
    action: AddBook
  )*/
}
