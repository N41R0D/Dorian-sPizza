import { Component, OnInit } from '@angular/core';
import ingredients from '../models/ingredients';
import {PizzasService} from '../services/pizzas.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {NavigationExtras, Router} from '@angular/router';
import pizzas from '../models/pizzas';

@Component({
  selector: 'app-pizzaform',
  templateUrl: './pizzaform.page.html',
  styleUrls: ['./pizzaform.page.scss'],
})
export class PizzaformPage implements OnInit {

  IngredientsArray: Array<ingredients> = new Array<ingredients>();
  PizzaArray: Array<pizzas> = new Array<pizzas>();
  imgData: string;
  pizzaname = '';
  pizzaprice: number;
  pizzaingredients: number[] = [];
  selectedItem: pizzas;

  constructor(private pizzasservice: PizzasService, private camera: Camera, private router: Router) { }

  ngOnInit() {
    this.loadDataIngredients();
    if (this.router.getCurrentNavigation().extras.state) {
      this.loadexistedpizza();
    }

  }

  loadexistedpizza() {
    this.selectedItem = this.router.getCurrentNavigation().extras.state.pizza;
    this.pizzaname = this.selectedItem.nom;
    this.imgData = this.selectedItem.photo;
    this.pizzaprice = this.selectedItem.prix;
    this.pizzaingredients = this.selectedItem.ingredients;
  }

  loadDataIngredients() {
    this.pizzasservice.loadData('ingredient').subscribe(
        result => {
          for (let index in result) {
            this.IngredientsArray.push(new ingredients(result[index]));
          }}
    );

  }

  checkingredient(idingredient: number) {
    const index = this.pizzaingredients.indexOf(idingredient);
    if( index >=0) {
      this.pizzaingredients.splice(index, 1);
    }else{
      this.pizzaingredients.push(idingredient);
    }
  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    });
  }

  sendpizza() {

    const body = {nom: this.pizzaname, photo: this.imgData, prix: this.pizzaprice, ingredients: this.pizzaingredients};

    if (this.selectedItem) {
      const url = 'pizza/' + this.selectedItem.id;
      this.pizzasservice.patchData(url, body);
    }else {
      this.pizzasservice.addData('pizza', body);
    }
    this.router.navigate(['/gestion']);
  }



}
