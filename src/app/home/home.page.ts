import { Component, OnInit } from '@angular/core';

import {PizzasService} from '../services/pizzas.service';
import {PannierService} from '../services/panier.service';
import pizzas from '../models/pizzas';
import {NavigationExtras, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  PizzaArray: Array<pizzas> = new Array<pizzas>();
  cartcount: BehaviorSubject<number>;

  constructor(private pizzasservice: PizzasService, private panierservice: PannierService, private router: Router) {
    this.cartcount = this.panierservice.getCartItemCount();
  }

  ngOnInit(): void {
    this.loadData();
  }

  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }

  loadData() {
    this.pizzasservice.loadData('pizza').subscribe(
        result => {
          for (let index in result) {
            this.PizzaArray.push(new pizzas(result[index]));
          }}
    );
  }

  goToAboutPage(dataid) {
    const navigationExtras: NavigationExtras = {
      state: {
        pizza: dataid
      }
    };
    this.router.navigate(['/details'], navigationExtras);
  }

  addtocart(dataid) {
    this.panierservice.addToCart(dataid);
  }
}
