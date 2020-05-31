import { Component, OnInit } from '@angular/core';
import {PizzasService} from '../services/pizzas.service';
import {NavigationExtras, Router} from '@angular/router';
import pizzas from '../models/pizzas';

@Component({
  selector: 'app-ingredientform',
  templateUrl: './ingredientform.page.html',
  styleUrls: ['./ingredientform.page.scss'],
})
export class IngredientformPage implements OnInit {

  ingredientname = '';
  selectedItem: pizzas;

  constructor(private pizzasservice: PizzasService, private router: Router) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.loadexistedingredient();
    }
  }



  loadexistedingredient() {
    this.selectedItem = this.router.getCurrentNavigation().extras.state.ingredient;
    this.ingredientname = this.selectedItem.nom;
  }


  sendingredient() {

    const body = {nom: this.ingredientname};

    if (this.selectedItem) {
      const url = 'ingredient/' + this.selectedItem.id;
      this.pizzasservice.patchData(url, body);
    }else {
      this.pizzasservice.addData('ingredient', body);
    }
    this.router.navigate(['/gestion']);
  }

}
