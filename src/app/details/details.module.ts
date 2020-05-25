import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DetailsPage } from './details.page';
import {PizzasService} from '../services/pizzas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage],
  providers: [PizzasService]
})
export class DetailsPageModule {}
