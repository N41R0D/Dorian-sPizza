import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';

import { PanierPage } from './panier.page';
import {PizzasService} from '../services/pizzas.service';
// import {PannierService} from '../services/panier.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PanierPageRoutingModule
  ],
  declarations: [PanierPage],
  providers: [PizzasService]
})
export class PanierPageModule {}
