import { Component, OnInit } from '@angular/core';
import {PannierService} from '../services/panier.service';
import pizzas from '../models/pizzas';
import panier from '../models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  PanierArray: Array<panier> = new Array<panier>();

  constructor(private panierservice: PannierService) { }

  ngOnInit() {
    this.getcart();
  }

  getcart() {
    this.PanierArray = this.panierservice.getCart();
  }

  getCountcart() {
    this.panierservice.getCartItemCount();
  }

  addtocart(dataid) {
    this.panierservice.addToCart(dataid);
  }

  decreaseProduct(dataid) {
    this.panierservice.decreaseProduct(dataid);
  }

  deletepizzabyid(idpizza){
    this.panierservice.deletepizza(idpizza);
  }
}
