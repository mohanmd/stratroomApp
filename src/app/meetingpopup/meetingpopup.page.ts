import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { CalendarModal, CalendarModalOptions,CalendarResult } from 'ion2-calendar';

@Component({
  selector: 'app-meetingpopup',
  templateUrl: './meetingpopup.page.html',
  styleUrls: ['./meetingpopup.page.scss'],
})
export class MeetingpopupPage implements OnInit {

  constructor( private modalControler: ModalController, public router: Router) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }

  // date picker
  dateRange: { from: 0; to: 30; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    // monthPickerFormat: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    monthFormat:'MMM YYYY'	,
  };

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'Range',
      pickMode: 'range',
      color:'dark',
      cssClass: 'calendar_Cust',
      
    };
    

  let myCalendar =  await this.modalControler.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();    
  const event: any = await myCalendar.onDidDismiss();
  const date = event.data;
  const from: CalendarResult = date.from;
  const to: CalendarResult = date.to;

  console.log(date, from, to);
}

}