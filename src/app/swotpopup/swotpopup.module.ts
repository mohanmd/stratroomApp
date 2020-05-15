import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwotpopupPageRoutingModule } from './swotpopup-routing.module';

import { SwotpopupPage } from './swotpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwotpopupPageRoutingModule
  ],
  declarations: [SwotpopupPage]
})
export class SwotpopupPageModule {}
