import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubInitiativeModalPage } from './sub-initiative-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SubInitiativeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubInitiativeModalPageRoutingModule {}
