import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';
import { CalendarController } from 'ion2-calendar/dist'
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions,CalendarResult, DayConfig } from 'ion2-calendar';



@Component({
  selector: 'app-intiative-modalpopup',
  templateUrl: './intiative-modalpopup.page.html',
  styleUrls: ['./intiative-modalpopup.page.scss'],
})
export class IntiativeModalpopupPage implements OnInit {
  // @Input() data: string;
  // @Input() data1: string;
  // @Input() iniativedata: string;
  public buttonTrue: boolean;
  date: string;
  from: string;
  to: string;
  json: string;
  
  fromDateF: any;
  toDateF: any;

  constructor( private modalControler: ModalController,  private calendarControler: CalendarController , public router: Router  )  {
  
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }


  // range picker
  // optionsRange: CalendarComponentOptions = {
  //   showMonthPicker: true,
    
  // };



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
    

    // const options: CalendarComponentOptions = {
    //   monthPickerFormat: ['jan'],
    //   showMonthPicker: false,   
    //   pickMode: 'single',
    //   weekdays: []
    // };
    
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
