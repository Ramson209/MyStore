import {HttpClient} from '@angular/common/http'
import { Product } from './products';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    // this.items.push(product);
    this.items = [...this.items, product] // use spread operator instaed of push
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(private http: HttpClient) {}
}
