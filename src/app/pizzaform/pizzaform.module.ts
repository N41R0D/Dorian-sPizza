import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaformPageRoutingModule } from './pizzaform-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { PizzaformPage } from './pizzaform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaformPageRoutingModule
  ],
  declarations: [PizzaformPage],
  providers: [Camera]
})
export class PizzaformPageModule {}
