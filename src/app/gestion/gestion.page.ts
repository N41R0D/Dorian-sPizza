import { Component, OnInit } from '@angular/core';

import {PizzasService} from '../services/pizzas.service';
import {PannierService} from '../services/panier.service';
import pizzas from '../models/pizzas';
import ingredients from '../models/ingredients';
import {Subject} from 'rxjs';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  PizzaArray: Array<pizzas> = new Array<pizzas>();
  IngredientsArray: Array<ingredients> = new Array<ingredients>();
  ingredientname = '';
  private datatest: Subject<boolean>;

  constructor(private pizzasservice: PizzasService, private panierservice: PannierService, private router: Router) {
    this.datatest = this.pizzasservice.datatest;
    this.datatest.subscribe(() => {this.loadDataPizza(); this.loadDataIngredients()});
  }

  ngOnInit(): void {
    this.loadDataPizza();
    this.loadDataIngredients();
  }

  loadDataPizza() {
    this.PizzaArray.splice(0, this.PizzaArray.length);
    this.pizzasservice.loadData('pizza').subscribe(
        result => {
          for (let index in result) {
            this.PizzaArray.push(new pizzas(result[index]));
          }}
    );
  }

  loadDataIngredients() {
    this.pizzasservice.loadData('ingredient').subscribe(
        result => {
          for (let index in result) {
            this.IngredientsArray.push(new ingredients(result[index]));
          }}
    );
  }

  deletePizza(idpizza: number) {
    const url = 'pizza/' + idpizza;
    this.pizzasservice.deleteData(url);
  }

  deleteIngredient(idingredient: number) {
    const url = 'ingredient/' + idingredient;
    this.pizzasservice.deleteData(url);
  }


  addingredient() {
    const body = {nom: this.ingredientname};
    this.pizzasservice.addData('ingredient', body);
  }

  pizzamodyfy(pizza) {
    const navigationExtras: NavigationExtras = {
      state: {
        pizza: pizza
      }
    };
    this.router.navigate(['/pizzaform'], navigationExtras);
  }

}
