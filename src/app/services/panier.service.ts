import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import pizzas from '../models/pizzas';
import panier from '../models/panier';
import {PizzasService} from './pizzas.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PannierService {

    private cart = [];
    private cartItemCount = new BehaviorSubject(0);
    PanierArray: Array<panier> = new Array<panier>();

    constructor(private pizzasservice: PizzasService, private http: HttpClient) {
    }


    getCart() {
        return this.PanierArray;
    }

    getCartItemCount() {
        return this.cartItemCount;
    }

    addToCart(idpizza: number) {
        let added = false;

        for (const p of this.PanierArray) {
            if (p.idpizza === idpizza) {
                p.qty += 1;
                p.prixtotalpizza = p.prixpizza * p.qty;
                added = true;
                break;
            }
        }
        if (!added) {
            this.pizzasservice.loadData('pizza?id=' + idpizza).subscribe(
                result => {
                    // let result[0].
                    this.PanierArray.push(new panier(result[0]));
                }
            );
        }
        console.log(this.PanierArray);
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }

    decreaseProduct(idpizza) {
        for (const p of this.PanierArray) {
            if (p.idpizza === idpizza) {
                p.qty -= 1;

                if (p.qty == 0) {
                    console.log(p);
                    const index = this.PanierArray.indexOf(p);
                    console.log(index);
                    this.PanierArray.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }

    deletepizza(idpizza) {
        for (const p of this.PanierArray) {
            if (p.idpizza === idpizza) {
                const index = this.PanierArray.indexOf(p);
                this.PanierArray.splice(index, 1);
            }
        }
    }

}
