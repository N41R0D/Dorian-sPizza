import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientformPageRoutingModule } from './ingredientform-routing.module';

import { IngredientformPage } from './ingredientform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientformPageRoutingModule
  ],
  declarations: [IngredientformPage]
})
export class IngredientformPageModule {}
