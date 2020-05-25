import { Component, OnInit } from '@angular/core';

import {PizzasService} from '../services/pizzas.service';
import {PannierService} from '../services/panier.service';
import pizzas from '../models/pizzas';
import ingredients from '../models/ingredients';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  PizzaArray: Array<pizzas> = new Array<pizzas>();
  IngredientsArray: Array<ingredients> = new Array<ingredients>();

  constructor(private pizzasservice: PizzasService, private panierservice: PannierService) { }

  ngOnInit(): void {
    this.loadDataPizza();
    this.loadDataIngredients();
  }

  loadDataPizza() {
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
    this.pizzasservice.deleteData('pizza/' + idpizza);
  }

  deleteIngredient(idingredient: number) {
    this.pizzasservice.deleteData('ingredient/' + idingredient);
  }


}
