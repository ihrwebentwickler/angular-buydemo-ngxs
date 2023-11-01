import {BasketStore} from "./basket.interface";

export class SetBasket {
  static readonly type = '[BasketStore] Add';
  constructor(public payload: BasketStore) {}
}

export class GetBaskets {
  static readonly type = '[BasketStore] get';
  constructor(public payload: any) {}
}
