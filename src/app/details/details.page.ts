import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {PizzasService} from '../services/pizzas.service';
import pizzas from '../models/pizzas';
import ingredients from '../models/ingredients';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // PizzaArray: Array<pizzas> = new Array<pizzas>();
  IngredientsArray: Array<ingredients> = new Array<ingredients>();
  selectedItem: pizzas;

  constructor(private router: Router, private pizzasservice: PizzasService) { }

  ngOnInit() {
    this.selectedItem = this.router.getCurrentNavigation().extras.state.pizza;

    this.loadData(this.selectedItem.ingredients);
  }

  loadData(tabingredients) {
  console.log(tabingredients);
    for (const [key, value] of Object.entries(tabingredients)) {
      console.log(key, value);
      this.pizzasservice.loadData('ingredient?id=' + value).subscribe(
          result => {
            for (let index in result) {
              this.IngredientsArray.push(new ingredients(result[index]));
            }}
      );
      // console.log(this.IngredientsArray);
    }
  }
}
