import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubInitiativeModalPageRoutingModule } from './sub-initiative-modal-routing.module';

import { SubInitiativeModalPage } from './sub-initiative-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubInitiativeModalPageRoutingModule
  ],
  declarations: [SubInitiativeModalPage]
})
export class SubInitiativeModalPageModule {}
