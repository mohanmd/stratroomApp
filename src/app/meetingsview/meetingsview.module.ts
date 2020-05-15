import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingsviewPageRoutingModule } from './meetingsview-routing.module';

import { MeetingsviewPage } from './meetingsview.page';

// datepicker
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';
import { MeetingViewPoupPage } from '../meeting-view-poup/meeting-view-poup.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingsviewPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MeetingsviewPage
      }
    ]),
    CalendarModule,

  ],
  
  declarations: [MeetingViewPoupPage,MeetingsviewPage],
  entryComponents: [MeetingViewPoupPage]
})
export class MeetingsviewPageModule {}
