import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { CalendarController } from 'ion2-calendar/dist';
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions,CalendarResult, DayConfig } from 'ion2-calendar';

@Component({
  selector: 'app-swotpopup',
  templateUrl: './swotpopup.page.html',
  styleUrls: ['./swotpopup.page.scss'],
})
export class SwotpopupPage implements OnInit {

  constructor(
    public modalControler: ModalController,
    private calendarControler: CalendarController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }

  
  // datepicker range
  async openCalendar(input) {

    const options: CalendarModalOptions = {
      title: 'range',
      pickMode: 'range',
      color:'dark',
      cssClass: 'dayOff', 
      disableWeeks: [],
      defaultDate: new Date(),
      // monthFormat: 'DD MM YYYY'
    };
      
    const myCalendar =  await this.modalControler.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass: 'calendarModal', 
    });

    myCalendar.present();    
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const dateObj = event.data.dateObj;
    const from: CalendarResult = date.from;
    const to: CalendarResult = date.to;

    console.log(from.dateObj, to.dateObj);

    var fromselectdate = from.date + '/ ' + from.months + '/ ' + from.years + ' - ' +  to.date + '/ ' + to.months + '/ ' + to.years ; 
    document.querySelector('.'+input).setAttribute('value', fromselectdate);
  }
}
