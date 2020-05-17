import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from '@angular/router';
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions,CalendarResult } from 'ion2-calendar';



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
  // date: string;
  // type: 'string';
  // dateMulti: string[];
  // dateRange: { from: string; to: string; };

  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi'
  // };
  constructor( private modalControler: ModalController, public router: Router)  {
    // console.log(data,'lathaa')

  }

  ngOnInit() {
  }
  onChange($event) {
    console.log($event);
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



  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'range',
      pickMode: 'range',
      color:'dark',
      cssClass: 'dayOff', 
      disableWeeks: [],
    };
    const option: CalendarComponentOptions = {
      monthPickerFormat: ['jan'],
      showMonthPicker: false,   
      pickMode: 'single',
      weekdays: []
    };

  let myCalendar =  await this.modalControler.create({
    component: CalendarModal,
    componentProps: { options ,option},
  });

  myCalendar.present();    
  const event: any = await myCalendar.onDidDismiss();
  const date = event.data;
  const from: CalendarResult = date.from;
  const to: CalendarResult = date.to;

  console.log(date, from, to);
}


}
