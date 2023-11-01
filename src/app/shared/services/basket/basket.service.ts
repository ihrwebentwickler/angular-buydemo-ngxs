import {Injectable} from '@angular/core';


import {Product} from "../../models/product";
import {BasketRepository} from "../../../state/basket.repository";
import {Store} from "@ngxs/store";
import {SetBasket} from "../../../state/basket.actions";

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(
    private store: Store
  ) {
  }

  addToBasket(product: Product): void {
    // const basketStore = this.basketRepository.selectBasket(product.id);
    // console.log(basketStore);
    // if (basketStore && basketStore.amount < basketStore.product.amount) {
    //   this.basketRepository.setBasket({id: product.id, product: product, amount: basketStore.amount + 1});
    //   console.log("zzzzzzzzzzzzzzzzzz");
    // } else {
    //   this.basketRepository.setBasket({id: product.id, product: product, amount: 1});
    // }
    //
    // return this.basketRepository.selectBaskets();
    this.store.dispatch(new SetBasket({id: product.id, product: product, amount: 2}));
    // BasketRepository.setBasket({id: product.id, product: product, amount: 2});
  }

  removeFromBasket(product: Product): void {
    // const basketStore = this.basketRepository.selectBasket(product.id);
    // if (basketStore && basketStore.amount !== 0) {
    //   this.basketRepository.setBasket({id: product.id, product: product, amount: basketStore.amount - 1});
    // }
    //
    // return this.basketRepository.selectBaskets();
  }
}
