import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwotpopupPage } from './swotpopup.page';

const routes: Routes = [
  {
    path: '',
    component: SwotpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwotpopupPageRoutingModule {}
