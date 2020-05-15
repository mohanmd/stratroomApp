import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingpopupPageRoutingModule } from './meetingpopup-routing.module';

import { MeetingpopupPage } from './meetingpopup.page';

// datepicker
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingpopupPageRoutingModule,    
    RouterModule.forChild([
      {
        path: '',
        component: MeetingpopupPage
      }
    ]),
    CalendarModule
  ],
  declarations: [MeetingpopupPage]
})
export class MeetingpopupPageModule {}
