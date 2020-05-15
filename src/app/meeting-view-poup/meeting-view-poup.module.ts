import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingViewPoupPageRoutingModule } from './meeting-view-poup-routing.module';

import { MeetingViewPoupPage } from './meeting-view-poup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingViewPoupPageRoutingModule
  ],
  declarations: [MeetingViewPoupPage]
})
export class MeetingViewPoupPageModule {}
