import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwotPageRoutingModule } from './swot-routing.module';

import { SwotPage } from './swot.page';

// modal page
import { SwotpopupPage } from '../swotpopup/swotpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwotPageRoutingModule,    

  ],
  declarations: [SwotpopupPage, SwotPage],
  entryComponents: [SwotpopupPage],
})

export class SwotPageModule {}
