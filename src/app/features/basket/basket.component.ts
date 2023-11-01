import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';

import {BasketStore} from "../../state/basket.interface";
import {BasketRepository} from "../../state/basket.repository";

import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class BasketComponent implements OnInit {
  basketItems!: any;

  constructor() {}

  ngOnInit(): void {
    this.basketItems = BasketRepository.selectBaskets();
    console.log(this.basketItems);
  }

  onClickRemoveProduct(item: BasketStore): void {
    // this.basketItems = this.basketRepository.deleteBasket(item.id);
  }

  onClickAddAmount(item: BasketStore) {
    // this.basketItems = this.basketService.addToBasket(item.product);
  }

  onClickSubstractAmount(item: BasketStore) {
    // this.basketItems = this.basketService.addToBasket(item.product);
  }
}
