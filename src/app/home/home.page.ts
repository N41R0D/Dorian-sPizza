import { Component, OnInit } from '@angular/core';

import {PizzasService} from '../services/pizzas.service';
import {PannierService} from '../services/panier.service';
import pizzas from '../models/pizzas';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  PizzaArray: Array<pizzas> = new Array<pizzas>();

  constructor(private pizzasservice: PizzasService, private panierservice: PannierService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.pizzasservice.loadData('pizza').subscribe(
        result => {
          for (let index in result) {
            this.PizzaArray.push(new pizzas(result[index]));
          }}
    );
    // console.log(this.PizzaArray);
  }

  goToAboutPage(dataid) {
    // console.log(dataid);
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
